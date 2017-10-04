import find from 'lodash/find';
import axios from 'axios';
import addressMockData from './data/2352SJ30';
import productsMockData from './data/products';

export const products = productsMockData;

const nlAddressApi = axios.create({
    baseURL: `https://api.postcodeapi.nu/v2/`,
    headers: {
        'X-Api-Key': 'FBuMpkwGsk2aPyb6PXtcC68Ytor87yxi4ddLTPWd'
    }
});

export default {
    getAllProducts() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(products)
            }, 0)
        });
    },
    getProduct(id = 0) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const product = find(products, {id: id});
                resolve(product);
            }, 0)
        });
    },
    getAddressByZipCode(zipcode) {
        return new Promise((resolve, reject) => {
            /*nlAddressApi.get('addresses', {
                params: {
                    'postcode': zipcode
                }
            });*/
            resolve({
                data: addressMockData
            });
        });
    },
    getAddressByZipCodeAndNumber({zipcode, number}) {
        return new Promise((resolve, reject) => {
            /*nlAddressApi.get('addresses', {
                params: {
                    'postcode': zipcode,
                    'number':  number
                }
            });*/
            resolve({
                data: addressMockData
            });
        })
    },
    getGeoCodeByAddress(address) {
        return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyBpdwYRO9h74NOLQy6DOHcIyoPzXemVifg`);
    }
}