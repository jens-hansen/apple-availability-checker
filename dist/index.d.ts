interface AppleAvailabilityResponse {
    head: {
        status: string;
        data: {};
    };
    body: {
        stores: AppleStore[];
        location: string;
    };
}
interface AppleStore {
    storeEmail: string;
    storeName: string;
    reservationUrl: string;
    makeReservationUrl: string;
    storeImageUrl: string;
    country: string;
    city: string;
    storeNumber: string;
    phoneNumber: string;
    address: AppleStoreAddress;
    hoursUrl: string;
    storeHours: AppleStoreHours;
    storelatitude: number;
    storelongitude: number;
    storedistance: number;
    storeDistanceWithUnit: string;
    storeDistanceVoText: string;
    storelistnumber: number;
    storeListNumber: number;
    partsAvailability: {
        [key: string]: ApplePart;
    };
}
interface ApplePart {
    storePickEligible: boolean;
    storeSearchEnabled: boolean;
    storeSelectionEnabled: true;
    storePickupQuote: string;
    pickupSearchQuote: string;
    storePickupLabel: string;
    partNumber: string;
    purchaseOption: string;
    ctoOptions: string;
    storePickupLinkText: string;
    storePickupProductTitle: string;
    pickupDisplay: string;
}
interface AppleStoreHours {
    storeHoursText: string;
    bopisPickupDays: string;
    bopisPickupHours: string;
    hours: Hours[];
}
interface Hours {
    storeTimings: string;
    storeDays: string;
}
interface AppleStoreAddress {
    address?: string;
    adress2?: string;
    address3?: string;
    postalCode: string;
}
interface AppleAvailabilityRequest {
    location: string;
    devices: string[] | string;
}
export declare const getAvailability: ({ devices, location, }: AppleAvailabilityRequest) => Promise<AppleAvailabilityResponse>;
export {};
