const apiResponse = {
  status: "success",
  data: {
    user: {
      id: 42,
      profile: {
        name: "code-Estif",
        age: 16,
        location: {
          country: "Ethiopia",
          city: "Addis Ababa"
        }
      },
      stats: {
        followers: 1200,
        following: 300
      }
    }
  }
};
const {data:{user: {profile:{name, age}}} }
console.log(name, age) 