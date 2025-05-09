enum AlertStatus {
  success = "success",
  error = "error",
}

enum AlertMsg {
  successMsg = "Message Sent Successfully",
  errorMsg = "Failed to send the message",
  emptyFieldMsg = "All input fields are required .",
}
enum AlertDesc {
  successMsgDesc = "we have received your message and we will reply as soon as possible.",
  errorMsgDesc = "Oops something went wrong. 🚩",
  emptyFieldMsgDesc = "Please fill all input fields before sending.",
}
export { AlertStatus, AlertMsg, AlertDesc };
