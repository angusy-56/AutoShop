import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Generate confirmation number
    const confirmationNumber = `MSP-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;

    // Create transporter (configure with your SMTP settings)
    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email content
    const emailContent = `
      New Quote Request - ${confirmationNumber}
      
      Contact Information:
      Name: ${data.name}
      Email: ${data.email}
      Phone: ${data.phone}
      
      Vehicle Information:
      Year: ${data.vehicleYear}
      Make: ${data.vehicleMake}
      Model: ${data.vehicleModel}
      License Plate: ${data.licensePlate || 'Not provided'}
      VIN: ${data.vin || 'Not provided'}
      
      Preferred Date/Time:
      Date: ${data.preferredDate || 'Not specified'}
      Time: ${data.preferredTime || 'Not specified'}
      
      Services Needed:
      ${data.servicesNeeded.join(', ')}
      
      Description:
      ${data.description}
      
      Submitted: ${new Date().toLocaleString()}
    `;

    // Send email
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: 'quotes@meanstreetsperformance.com', // TODO: Replace with actual email
      subject: `New Quote Request - ${confirmationNumber}`,
      text: emailContent,
    });

    // TODO: Log to file or database
    console.log('Quote request received:', { confirmationNumber, data });

    return NextResponse.json({ 
      success: true, 
      confirmationNumber 
    });

  } catch (error) {
    console.error('Error processing quote request:', error);
    return NextResponse.json(
      { error: 'Failed to process quote request' },
      { status: 500 }
    );
  }
}