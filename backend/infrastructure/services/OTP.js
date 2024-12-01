import { createClient } from 'redis';
import { Redis } from '@upstash/redis';
import nodemailer from 'nodemailer';
import crypto from 'crypto';

class OTP {
    constructor() {
        this.redisClient = new Redis({
            url: 'https://full-oriole-29135.upstash.io', // Replace with your Upstash Redis URL
            token: 'AXHPAAIjcDFlOGM1N2U4ZjQ1M2E0YTJkODUwNWM5Y2U2NWI4MGY1ZnAxMA', // Replace with your Upstash token
        });

       
    }

    generateOtp() {
        return crypto.randomInt(100000, 999999).toString();
    }

    async sendOtp(email) {
        try {
            const otp = this.generateOtp();
            console.log("otpp");
            

            // Store OTP in Redis with an expiration time of 60 seconds
            await this.redisClient.set(`otp:${email}`, otp, { ex: 60 });

            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'moidheensuhair@gmail.com',
                    pass: 'desz uraw ownd exio',
                },
            });

            const mailOptions = {
                from: 'moidheensuhair@gmail.com',
                to: email,
                subject: 'Your OTP',
                text: `Your OTP code is ${otp}`,
            };
            console.log(mailOptions);
            

           return await transporter.sendMail(mailOptions);
        } catch (error) {
            console.error("Error sending OTP:", error);
            throw new Error("Failed to send OTP. Please try again later.");
        }
    }

    async verifyOtp(email, otp) {
        try {
            const storedOtp = await this.redisClient.get(email);
            if (!storedOtp) {
                throw new Error("OTP has expired.");
            }
            console.log(`Stored OTP: ${storedOtp}`);
            return storedOtp === otp;
        } catch (error) {
            console.error("Error verifying OTP:", error);
            throw new Error("Failed to verify OTP. Please try again later.");
        }
    }

    async deleteOtp(email) {
        try {
            await this.redisClient.del(email);
        } catch (error) {
            console.error("Error deleting OTP:", error);
            throw new Error("Failed to delete OTP. Please try again later.");
        }
    }
}

export default OTP;
