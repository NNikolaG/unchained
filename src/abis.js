export const decentragra_address = '0x15c5B853B3952C2F0cd5D77c61A03eb495042d75';
export const decentragram_abi = [
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "hash",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "desc",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "tipAmount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address payable",
                "name": "author",
                "type": "address"
            }
        ],
        "name": "ImageCreated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "hash",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "desc",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "tipAmount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address payable",
                "name": "author",
                "type": "address"
            }
        ],
        "name": "ImageTipped",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "imageCount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "images",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "hash",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "desc",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "tipAmount",
                "type": "uint256"
            },
            {
                "internalType": "address payable",
                "name": "author",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_imgHash",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_desc",
                "type": "string"
            }
        ],
        "name": "uploadImage",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_id",
                "type": "uint256"
            }
        ],
        "name": "tipImageOwner",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function",
        "payable": true
    }
]