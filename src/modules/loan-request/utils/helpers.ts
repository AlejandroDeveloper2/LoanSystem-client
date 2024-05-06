import {
  ReferencesData,
  ReferencesDataForm,
} from "@modules/loan-request/interfaces/data-interfaces";

export const parseReferenceDataReverse = (
  refrenceData: ReferencesData
): ReferencesDataForm => {
  return {
    firstRelativeNames: refrenceData.reference[0]?.name,
    firstRelativePhone: refrenceData.reference[0]?.phone,
    secondRelativeNames: refrenceData.reference[1]?.name,
    secondRelativePhone: refrenceData.reference[1]?.phone,
    firstFriendNames: refrenceData.reference[2]?.name,
    firstFriendPhone: refrenceData.reference[2]?.phone,
    secondFriendNames: refrenceData.reference[3]?.name,
    secondFriendPhone: refrenceData.reference[3]?.name,
    interaction: refrenceData.interaction,
    referredName: refrenceData.referred.name,
    referredPhone: refrenceData.referred.phone,
  };
};

export const parseReferenceData = (
  refrenceData: ReferencesDataForm
): ReferencesData => {
  return {
    reference: [
      {
        name: refrenceData.firstRelativeNames,
        phone: refrenceData.firstRelativePhone,
      },
      {
        name: refrenceData.secondRelativeNames,
        phone: refrenceData.secondRelativePhone,
      },
      {
        name: refrenceData.firstFriendNames,
        phone: refrenceData.firstFriendPhone,
      },
      {
        name: refrenceData.secondFriendNames,
        phone: refrenceData.secondFriendPhone,
      },
    ],
    interaction: refrenceData.interaction,
    referred: {
      name: refrenceData.referredName,
      phone: refrenceData.referredPhone,
    },
  };
};
