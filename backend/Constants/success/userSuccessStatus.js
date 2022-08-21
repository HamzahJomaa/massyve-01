const UserSuccessStatus = {
  LOGIN_SUCCESSFUL: { code: 200, message: "User Logged In Successfully" },
  LOGOUT_SUCCESSFUL: { code: 200, message: "User Logged Out Successfully" },
  SIGNUP_SUCCESSFUL : { code: 200, message: "Use Created Successfully" },
  PASSWORD_UPDATED_SUCCESSFULLY: { code: 203, message: "Password Updated Successfully" },
  FORGOT_PASSWORD_SUCCESSFUL: { code: 200, message: "Successfully sent an email" },
  OTP_SENT_SUCCESSFUL : { code: 200, message: "OTP sent to your email" },
  OTP_VERIFIED: { code: 200, message: "OTP verified successfully" },
};

module.exports = {
  UserSuccessStatus,
};
