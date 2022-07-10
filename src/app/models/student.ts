export interface Student {
  ID: string;
  active: boolean;
  grades: number;
  Name: string;
  Gender: string;
  Class: string;
  Club: string;
  Persona: string;
  Crush: string;
  BreastSize: string;
  Strength: string;
  Hairstyle: string;
  Color: string;
  Stockings: string;
  Accessory: string;
  ScheduleTime: string;
  ScheduleDestination: string;
  ScheduleAction: string;
}
export interface StudentResponse {
  status: number;

  message?: String;
  data?: Student[] | null;
}
