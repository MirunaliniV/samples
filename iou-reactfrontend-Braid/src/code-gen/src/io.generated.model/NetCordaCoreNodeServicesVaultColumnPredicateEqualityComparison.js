/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import NetCordaCoreNodeServicesVaultColumnPredicate from './NetCordaCoreNodeServicesVaultColumnPredicate';
import NetCordaCoreNodeServicesVaultColumnPredicateEqualityComparisonAllOf from './NetCordaCoreNodeServicesVaultColumnPredicateEqualityComparisonAllOf';
import NetCordaCoreNodeServicesVaultColumnPredicateInstant from './NetCordaCoreNodeServicesVaultColumnPredicateInstant';
import NetCordaCoreNodeServicesVaultColumnPredicateLong from './NetCordaCoreNodeServicesVaultColumnPredicateLong';
import NetCordaCoreNodeServicesVaultColumnPredicateObject from './NetCordaCoreNodeServicesVaultColumnPredicateObject';

/**
 * The NetCordaCoreNodeServicesVaultColumnPredicateEqualityComparison model module.
 * @module io.generated.model/NetCordaCoreNodeServicesVaultColumnPredicateEqualityComparison
 * @version 1.0.0
 */
class NetCordaCoreNodeServicesVaultColumnPredicateEqualityComparison {
    /**
     * Constructs a new <code>NetCordaCoreNodeServicesVaultColumnPredicateEqualityComparison</code>.
     * @alias module:io.generated.model/NetCordaCoreNodeServicesVaultColumnPredicateEqualityComparison
     * @extends 
     * @implements module:io.generated.model/NetCordaCoreNodeServicesVaultColumnPredicate
     * @implements module:io.generated.model/NetCordaCoreNodeServicesVaultColumnPredicateEqualityComparisonAllOf
     * @implements module:io.generated.model/NetCordaCoreNodeServicesVaultColumnPredicateInstant
     * @implements module:io.generated.model/NetCordaCoreNodeServicesVaultColumnPredicateObject
     * @implements module:io.generated.model/NetCordaCoreNodeServicesVaultColumnPredicateLong
     */
    constructor() { 
        NetCordaCoreNodeServicesVaultColumnPredicateEqualityComparisonAllOf.initialize(this);
        NetCordaCoreNodeServicesVaultColumnPredicateEqualityComparison.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
        obj['operator'] = operator;
        obj['rightLiteral'] = rightLiteral;
    }

    /**
     * Constructs a <code>NetCordaCoreNodeServicesVaultColumnPredicateEqualityComparison</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:io.generated.model/NetCordaCoreNodeServicesVaultColumnPredicateEqualityComparison} obj Optional instance to populate.
     * @return {module:io.generated.model/NetCordaCoreNodeServicesVaultColumnPredicateEqualityComparison} The populated <code>NetCordaCoreNodeServicesVaultColumnPredicateEqualityComparison</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NetCordaCoreNodeServicesVaultColumnPredicateEqualityComparison();

            ApiClient.constructFromObject(data, obj, '');
            
            NetCordaCoreNodeServicesVaultColumnPredicate.constructFromObject(data, obj);
            NetCordaCoreNodeServicesVaultColumnPredicateEqualityComparisonAllOf.constructFromObject(data, obj);
            NetCordaCoreNodeServicesVaultColumnPredicateInstant.constructFromObject(data, obj);
            NetCordaCoreNodeServicesVaultColumnPredicateObject.constructFromObject(data, obj);
            NetCordaCoreNodeServicesVaultColumnPredicateLong.constructFromObject(data, obj);

            if (data.hasOwnProperty('operator')) {
                obj['operator'] = ApiClient.convertToType(data['operator'], 'String');
            }
            if (data.hasOwnProperty('rightLiteral')) {
                obj['rightLiteral'] = ApiClient.convertToType(data['rightLiteral'], Object);
            }
        }
        return obj;
    }


}

/**
 * @member {module:io.generated.model/NetCordaCoreNodeServicesVaultColumnPredicateEqualityComparison.OperatorEnum} operator
 */
NetCordaCoreNodeServicesVaultColumnPredicateEqualityComparison.prototype['operator'] = undefined;

/**
 * @member {Object} rightLiteral
 */
NetCordaCoreNodeServicesVaultColumnPredicateEqualityComparison.prototype['rightLiteral'] = undefined;


// Implement NetCordaCoreNodeServicesVaultColumnPredicateEqualityComparisonAllOf interface:
/**
 * @member {module:io.generated.model/NetCordaCoreNodeServicesVaultColumnPredicateEqualityComparisonAllOf.OperatorEnum} operator
 */
NetCordaCoreNodeServicesVaultColumnPredicateEqualityComparisonAllOf.prototype['operator'] = undefined;
/**
 * @member {Object} rightLiteral
 */
NetCordaCoreNodeServicesVaultColumnPredicateEqualityComparisonAllOf.prototype['rightLiteral'] = undefined;



/**
 * Allowed values for the <code>operator</code> property.
 * @enum {String}
 * @readonly
 */
NetCordaCoreNodeServicesVaultColumnPredicateEqualityComparison['OperatorEnum'] = {

    /**
     * value: "EQUAL"
     * @const
     */
    "EQUAL": "EQUAL",

    /**
     * value: "NOT_EQUAL"
     * @const
     */
    "NOT_EQUAL": "NOT_EQUAL",

    /**
     * value: "EQUAL_IGNORE_CASE"
     * @const
     */
    "EQUAL_IGNORE_CASE": "EQUAL_IGNORE_CASE",

    /**
     * value: "NOT_EQUAL_IGNORE_CASE"
     * @const
     */
    "NOT_EQUAL_IGNORE_CASE": "NOT_EQUAL_IGNORE_CASE"
};



export default NetCordaCoreNodeServicesVaultColumnPredicateEqualityComparison;

