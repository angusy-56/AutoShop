"use strict";(()=>{var e={};e.id=774,e.ids=[774],e.modules={517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},6387:(e,t,o)=>{o.r(t),o.d(t,{headerHooks:()=>m,originalPathname:()=>P,requestAsyncStorage:()=>p,routeModule:()=>c,serverHooks:()=>l,staticGenerationAsyncStorage:()=>d,staticGenerationBailout:()=>v});var r={};o.r(r),o.d(r,{POST:()=>i}),o(5655);var s=o(3323),a=o(4647),n=o(6886);async function i(e){try{let t=await e.json(),o=`MSP-${Date.now()}-${Math.random().toString(36).substr(2,9).toUpperCase()}`,r=Object(function(){var e=Error("Cannot find module 'nodemailer'");throw e.code="MODULE_NOT_FOUND",e}())({host:process.env.SMTP_HOST||"smtp.gmail.com",port:parseInt(process.env.SMTP_PORT||"587"),secure:!1,auth:{user:process.env.SMTP_USER,pass:process.env.SMTP_PASS}}),s=`
      New Quote Request - ${o}
      
      Contact Information:
      Name: ${t.name}
      Email: ${t.email}
      Phone: ${t.phone}
      
      Vehicle Information:
      Year: ${t.vehicleYear}
      Make: ${t.vehicleMake}
      Model: ${t.vehicleModel}
      License Plate: ${t.licensePlate||"Not provided"}
      VIN: ${t.vin||"Not provided"}
      
      Preferred Date/Time:
      Date: ${t.preferredDate||"Not specified"}
      Time: ${t.preferredTime||"Not specified"}
      
      Services Needed:
      ${t.servicesNeeded.join(", ")}
      
      Description:
      ${t.description}
      
      Submitted: ${new Date().toLocaleString()}
    `;return await r.sendMail({from:process.env.SMTP_FROM||process.env.SMTP_USER,to:"quotes@meanstreetsperformance.com",subject:`New Quote Request - ${o}`,text:s}),console.log("Quote request received:",{confirmationNumber:o,data:t}),n.Z.json({success:!0,confirmationNumber:o})}catch(e){return console.error("Error processing quote request:",e),n.Z.json({error:"Failed to process quote request"},{status:500})}}!function(){var e=Error("Cannot find module 'nodemailer'");throw e.code="MODULE_NOT_FOUND",e}();let u=s.AppRouteRouteModule,c=new u({definition:{kind:a.x.APP_ROUTE,page:"/api/quote/route",pathname:"/api/quote",filename:"route",bundlePath:"app/api/quote/route"},resolvedPagePath:"/home/project/project 3/app/api/quote/route.ts",nextConfigOutput:"export",userland:r}),{requestAsyncStorage:p,staticGenerationAsyncStorage:d,serverHooks:l,headerHooks:m,staticGenerationBailout:v}=c,P="/api/quote/route"}};var t=require("../../../webpack-runtime.js");t.C(e);var o=e=>t(t.s=e),r=t.X(0,[303],()=>o(6387));module.exports=r})();