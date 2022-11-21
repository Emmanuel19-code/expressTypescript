export const GenerateOTP = ():string =>{
    let OTP:string="",i:number
    for(i=0 ; i<=3 ; i++){
       let rand:number= Math.floor(Math.random()*9)
       OTP+=rand
      }
  return OTP
}