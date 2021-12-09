import admin from "./configs/firebase.js";

async function grantModeratorRole(email, role) {
  const user = await admin.auth().getUserByEmail(email); // 1
  if (user.customClaims && user.customClaims.admin === true) {
    console.log(user.customClaims);
  } // 2
  return admin.auth().setCustomUserClaims(user.uid, {
    role,
  }); // 3
}

// grantModeratorRole("thanhnhut.02jan@gmail.com", "admin");
// grantModeratorRole("user@example.com", "accountant");

function createUser(userObj) {
  admin
    .auth()
    .createUser(userObj)
    .then((userRecord) => console.log(userRecord))
    .catch((e) => console.log(e));
}

// createUser({
//   email: "user@example.com",
//   emailVerified: false,
//   phoneNumber: "+11234567890",
//   password: "secretPassword",
//   displayName: "John Doe",
//   photoURL: "http://www.example.com/12345678/photo.png",
//   disabled: false,
// });

const listAllUsers = (nextPageToken) => {
  // List batch of users, 1000 at a time.
  admin
    .auth()
    .listUsers(1000, nextPageToken)
    .then((listUsersResult) => {
      listUsersResult.users.forEach((userRecord) => {
        console.log("user", userRecord.toJSON());
      });
      if (listUsersResult.pageToken) {
        // List next batch of users.
        listAllUsers(listUsersResult.pageToken);
      }
    })
    .catch((error) => {
      console.log("Error listing users:", error);
    });
};
// Start listing users from the beginning, 1000 at a time.
listAllUsers();
