 const btn=document.getElementById("btn");
  const result=document.getElementById("result");
  const input=document.getElementById("country");

  async function getCountry(name){
    result.textContent="Loading...";
    try{
      const res=await fetch(`https://restcountries.com/v3.1/name/${name}`);
      if(!res.ok) throw new Error("Country not found");
      const data=await res.json();
      const country=data[0];
      const flag=country.flags.png;
      const cname=country.name.common;
      const capital=country.capital?country.capital[0]:"N/A";
      const region=country.region;
      const population=country.population.toLocaleString();
      const currency=Object.values(country.currencies)[0].name;

      result.innerHTML=`
        <img src="${flag}" alt="${cname} flag">
        <h3>${cname}</h3>
        <p><b>Capital:</b> ${capital}</p>
        <p><b>Region:</b> ${region}</p>
        <p><b>Population:</b> ${population}</p>
        <p><b>Currency:</b> ${currency}</p>
      `;
    }catch(err){
      result.textContent="❌ "+err.message;
    }
  }

  btn.addEventListener("click",()=>{
    const name=input.value.trim();
    if(!name) return alert("Enter a country name");
    getCountry(name);
  });
