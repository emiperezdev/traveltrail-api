import cron from "node-cron";
import { envs } from "../config/envs";
import { TravelDataSource } from "../domain/datasources/TravelDatasource";
import { TravelsModel } from "../data/models/travels.model";
import { generateTravelEmailTemplate } from "../templates/email.template";
import { EmailService } from "../services/EmailService";

export const emailJob = () => {
  const emailService = new EmailService();
  const travelDataSource = new TravelDataSource();

  cron.schedule("*/10 * * * * *", async () => {
    console.log("Every 10 seconds...");
    
    const travels = await TravelsModel.find({ isEmailSent: false });
    if (!travels.length)
      return console.log("There are no travels to send.");

    console.log(`>>> PROCESSING ${travels.length} travels...`);

    await Promise.all(
      travels.map(async (t) => {
        const htmlBody = generateTravelEmailTemplate(
          t.username,
          t.locationName,
          t.description,
          t.lat,
          t.lng
        );
        await emailService.sendEmail({
          to: envs.MAILER_EMAIL_DESTINATION,
          subject: `Travel: ${t._id}`,
          htmlBody: htmlBody,
        });
        const id = t._id;
        console.log(`Email sent to the travel with id: ${id}`);
        await travelDataSource.updateTravel(id.toString(), {
          ...t,
          isEmailSent: true,
        });
        console.log(`Travel updated with id: ${id}`);
      })
    );
  });
};
