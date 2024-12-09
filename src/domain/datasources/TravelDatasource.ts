import { TravelsModel } from '../../data/models/travels.model';
import { ITravel } from '../entities/travel.entity';

export class TravelDataSource {
  
  updateTravel = async (id: string, travelPartial: Partial<ITravel>) => {
    await TravelsModel.findByIdAndUpdate(id, {
      username: travelPartial.username,
      locationName: travelPartial.locationName,
      description: travelPartial.description,
      type: travelPartial.type,
      lng: travelPartial.lng,
      lat: travelPartial.lat,
      isEmailSent: travelPartial.isEmailSent
    });
  }
  
}