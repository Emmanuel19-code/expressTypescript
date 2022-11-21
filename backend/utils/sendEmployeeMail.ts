import sendEmail from "./sendMail";



interface EmployeeInfo{
    name:string,
    email:string,
    EmployeeId:string
}

export const sendEmployeeDetails = async (employee:EmployeeInfo)=>{
  return sendEmail({
    to:employee.email,
    subject:'Employee Details',
    html:`<h4> Hello, ${employee.name}</h4>
    You have completed your account verification,
    Your Employee ID is ,${employee.EmployeeId}
    `
  });
};