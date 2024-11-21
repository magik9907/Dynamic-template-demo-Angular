import { v4 as uuidv4 } from 'uuid';

export const TRANSFORM_KEY = 'TRANSFORM_DATA';
export const STORAGE_KEY = 'DEMO_DATA';
export const DATA = ` {
      "title": "this is title",
      "description": [
        "<h1>H1 title</h1>",
        "<h2>H2 title</h2>",
        "<h3>H3 title</h3>",
        "<h4>H4 title</h4>"
      ],
      "date": "2012-10-01",
      "votes": {
        "total": 100,
        "forPercentage": 20,
        "againstPercentage": 40,
        "noDecidedPercentage": 40
      },
      "comments": [
        {
          "id": 1,
          "user": "Konan",
          "comment": "Like it"
        },
        {
          "id": 2,
          "user": "Konan",
          "comment": "Like it"
        },
        {
          "id": 3,
          "user": "Pika",
          "comment": "Wooooo!!!! :D"
        },
        {
          "id": 4,
          "user": "Konan11",
          "comment": "Sounds good"
        },
        {
          "id": 5,
          "user": "Romand",
          "comment": "Perfect"
        }
      ]
    }
  `;

export const TRANSFORM_DATA = {
  id: '1ed1e031-6467-4354-b30f-95ca58192fb5',
  componentKey: '',
  selector: '$.title',
  order: 9007199254740991,
  mapper:
    "\n/**\n *  Change value passed to rendered component\n * \n * Arguments:\n * - data - is a result of originalData[selector]\n * - originalData - object with raw data\n * \n * Return:\n * {\n *  data: any - any type that will passed as main data to rendered component\n *  extendedData: Record<string,any> | null - additional data passed to rendered component \n * } \n */\nfunction mapper (data, originalData){\n    return {\n        data: data[0].toUpperCase(),\n        extendedData: {additionalInput:originalData['comments']}\n    };\n}\n\n// DO NOT CHANGED BELOW FUNCTION CALL\nmapper(data,originalData)\n",
};

export const MAPPER_EXAMPLE_CODE = `
/**
 *  Change value passed to rendered component
 * 
 * Arguments:
 * - data - is a result of originalData[selector]
 * - originalData - object with raw data
 * 
 * Return:
 * {
 *  data: any - any type that will passed as main data to rendered component
 *  extendedData: Record<string,any> | null - additional data passed to rendered component 
 * } 
 */
function mapper (data, originalData){
    return {
        data: data[0].toUpperCase(),
        extendedData: {additionalInput:originalData['comments']}
    };
}

// DO NOT CHANGED BELOW FUNCTION CALL
mapper(data,originalData)
`;
