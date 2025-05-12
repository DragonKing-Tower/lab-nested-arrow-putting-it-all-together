const userInfo = {
  username: "user1",
  password: "password123",
};

//Login feature
function createLoginTracker(userInfo) {
  let attemptCount = 0;

  const attemptTracker = (passwordAttempt) => {
    attemptCount += 1;
    if (passwordAttempt === userInfo.password) {
      return "Login successful";
    } else if (attemptCount > 3) {
      return `Account locked due to too many failed login attempts`;
    } else {
      return `Attempt ${attemptCount}: Login failed`;
    }
  };

  return attemptTracker;
}

module.exports = {
  ...(typeof createLoginTracker !== "undefined" && { createLoginTracker }),
};
