"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// creating a function 
function describe_city(CountryName = "Pakistan", CityName = "Karachi") {
    console.log(`${CountryName} is very beautiful country and I live in ${CityName}, ${CityName} is in ${CountryName}.`);
}
describe_city();
describe_city("Pakistan", "Lahore");
describe_city(undefined, "Islamabad");
describe_city("Canada", "Toronto");
