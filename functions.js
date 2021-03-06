/* 
Output: 
['Hello Suzie Summerson!', 'Hello Cacilia Caramuscia', 'Hello Mattie Mungane' etc]
*/

export function greetUsers(customers) {
    const greetings = customers.map(item => 
        `Hello ${item.first_name} ${item.last_name}`);
    return greetings;
}

/* 
Output: 
['Hello Suzie Summerson!', 'Hello Cacilia Caramuscia', etc]
*/

export function greetUsersOverAge60(customers) {
    return customers
        // first, filter over the user to get the ones over 60
        .filter(item => item.age > 60)
        // then map over them to make a greeting
        .map(item => `Hello ${item.first_name} ${item.last_name}!`);
}


/* 
Output: 
2125
*/

export function addAllAges(customers) {
    const sumAge = customers.reduce((acc, curr) => {
        return acc + curr.age;
    }, 0);

    return sumAge;
}

/* 
Output: 
5.088888888888889
*/

export function getAverageCoolFactor(customers) {
    const sumCoolFactor = customers.reduce((acc, curr) => {
        return acc + curr.cool_factor;
    }, 0);

    return sumCoolFactor / customers.length;

}

/* 
Output: 
{
    female: 4,
    male: 3,
    nonbinary: 2,
    etc . . .
}
*/

export function getTotalOfEachGender(customers) {
    
    const countingHashMap = customers.reduce((accumulator, customer) => {
        if(accumulator[customer.gender]) {
            accumulator[customer.gender]++;
        } else {
            accumulator[customer.gender] = 1;
        }

        return accumulator;
    }, {});

    return countingHashMap;
}

/* 
Output: 
 {
    female: 3,
    male: 2,
    nonbinary: 1,
    etc . . .
 }
*/

export function getGenderBreakdownOfFordOwners(customers) {
    const filteredFordArray = customers
        .filter(item => item.car_make === 'Ford')
        .reduce((accumulator, customer) => {
            if(accumulator[customer.gender]) {
                accumulator[customer.gender]++;
            } else {
                accumulator[customer.gender] = 1;
            }
            return accumulator;
        }, {});

    return filteredFordArray;
}

//////////////////////////////////////////////////////////
///////////// STRETCH GOALS /////////////////////////////
/////////////////////////////////////////////////////////

/* 
Output: 
{
    ford: {
        female: 3,
        male: 2,
        nonbinary: 1,
    },
    mercedes:  {
        female: 3,
        male: 2,
        nonbinary: 1,
    },
    etc . . .
}
*/

export function getGenderBreakdownOfEachCar(customers) {
    const carBrandsArr = customers.map(customer => ({
        gender: customer.gender,
        brand: customer.car_make
    }));

    // if you can get an array of non-duplicate car brands . . .
    const breakdownsByBrand = carBrandsArr.reduce((acc, carBrand) => {
        const genderBreakdown = carBrandsArr
            .filter(item => item.brand === carBrand.brand)
            .reduce((accumulator, customer) => {
                if(accumulator[customer.gender]) {
                    accumulator[customer.gender]++;
                } else {
                    accumulator[customer.gender] = 1;
                }
                return accumulator;
            }, {});
        acc[carBrand.brand] = genderBreakdown;
        return acc;
        
    }, {});

    return breakdownsByBrand;
}

/* 
Output: 
{
    ford: [3, 5, 4, 4, 7, 5],
    mercedes: [8, 5, 6, 8, 3, 9],
    honda: [2, 4, 4, 3, 7, 1],
    etc. . .
}
*/


export function getAllCoolFactorsOfEachCar(customers) {
    return true;
}

/* 
Output: 
{
    ford: 5.4
    mercedes:  8.5
    honda: 2.3
}
*/

export function getAverageCoolFactorOfEachCar(customers) {
    return true;
}


/* 
Output: 
// break the customers into age demographic blocks. For example, this says there are 55 people between 10 and 19, 38 people between 20 and 29, etc
{
    10: 55,
    20:  38,
    30: 12,
    40: 31,
    50: 62,
    60: 93,
    70: 45,
    80: 32,
    90: 11,
}
*/

export function makeAgeBrackets(customers) {
    return true;
}

/* 
Output: 
// break the customers into age demographic blocks. For example, this says there are 55 people between 10 and 19, 38 people between 20 and 29, etc
{
    10: [3, 5, 4, 4, 7, 5],
    20: [8, 5, 6, 8, 3, 9],
    30: [1, 8, 4, 1, 9, 2],
    40: [2, 4, 4, 3, 7, 1],
    etc . . .
}
*/

export function getCoolFactorsByAgeBracket(customers) {
    return true;
}


/* 
Output: 
// break the customers into age demographic blocks. For example, this says there are 55 people between 10 and 19, 38 people between 20 and 29, etc
{
    10: 5.6,
    20: 3.1
    30: 7.8,
    40: 9.5,
    etc . . .
}
*/

export function getAverageCoolFactorByAgeBracket(customers) {
    return true;
}

