module.exports = {
  "_format": "hh-sol-artifact-1",
  "contractName": "PoSPool",
  "sourceName": "contracts/PoSPool.sol",
  "abi": [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "ClaimInterest",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "votePower",
          "type": "uint256"
        }
      ],
      "name": "DecreasePoSStake",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "votePower",
          "type": "uint256"
        }
      ],
      "name": "IncreasePoSStake",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "ratio",
          "type": "uint256"
        }
      ],
      "name": "RatioChanged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "votePower",
          "type": "uint256"
        }
      ],
      "name": "WithdrawStake",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "_poolLockPeriod",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "_poolRegisted",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_addr",
          "type": "address"
        },
        {
          "internalType": "uint64",
          "name": "endBlockNumber",
          "type": "uint64"
        }
      ],
      "name": "_retireUserStake",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "offset",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "limit",
          "type": "uint256"
        },
        {
          "internalType": "uint64",
          "name": "endBlockNumber",
          "type": "uint64"
        }
      ],
      "name": "_retireUserStakes",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_user",
          "type": "address"
        }
      ],
      "name": "_userShareRatio",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "_withdrawPoolProfit",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "accRewardPerCfx",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_freeAddress",
          "type": "address"
        }
      ],
      "name": "addToFeeFreeWhiteList",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "claimAllInterest",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "claimInterest",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint64",
          "name": "votePower",
          "type": "uint64"
        }
      ],
      "name": "decreaseStake",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint64",
          "name": "votePower",
          "type": "uint64"
        }
      ],
      "name": "increaseStake",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "initialize",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "poolAPY",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "poolName",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "poolSummary",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "available",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "interest",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "totalInterest",
              "type": "uint256"
            }
          ],
          "internalType": "struct PoSPool.PoolSummary",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "poolUserShareRatio",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "posAddress",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "indentifier",
          "type": "bytes32"
        },
        {
          "internalType": "uint64",
          "name": "votePower",
          "type": "uint64"
        },
        {
          "internalType": "bytes",
          "name": "blsPubKey",
          "type": "bytes"
        },
        {
          "internalType": "bytes",
          "name": "vrfPubKey",
          "type": "bytes"
        },
        {
          "internalType": "bytes[2]",
          "name": "blsPubKeyProof",
          "type": "bytes[2]"
        }
      ],
      "name": "register",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_freeAddress",
          "type": "address"
        }
      ],
      "name": "removeFromFeeFreeWhiteList",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "count",
          "type": "uint256"
        }
      ],
      "name": "setCfxCountOfOneVote",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint64",
          "name": "period",
          "type": "uint64"
        }
      ],
      "name": "setLockPeriod",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        }
      ],
      "name": "setPoolName",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint64",
          "name": "ratio",
          "type": "uint64"
        }
      ],
      "name": "setPoolUserShareRatio",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "i",
          "type": "uint256"
        }
      ],
      "name": "stakerAddress",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "stakerNumber",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "uint64",
          "name": "offset",
          "type": "uint64"
        },
        {
          "internalType": "uint64",
          "name": "limit",
          "type": "uint64"
        }
      ],
      "name": "userInQueue",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "votePower",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "endBlock",
              "type": "uint256"
            }
          ],
          "internalType": "struct VotePowerQueue.QueueNode[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "userInQueue",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "votePower",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "endBlock",
              "type": "uint256"
            }
          ],
          "internalType": "struct VotePowerQueue.QueueNode[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_address",
          "type": "address"
        }
      ],
      "name": "userInterest",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "userOutQueue",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "votePower",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "endBlock",
              "type": "uint256"
            }
          ],
          "internalType": "struct VotePowerQueue.QueueNode[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "uint64",
          "name": "offset",
          "type": "uint64"
        },
        {
          "internalType": "uint64",
          "name": "limit",
          "type": "uint64"
        }
      ],
      "name": "userOutQueue",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "votePower",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "endBlock",
              "type": "uint256"
            }
          ],
          "internalType": "struct VotePowerQueue.QueueNode[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "userShareRatio",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_user",
          "type": "address"
        }
      ],
      "name": "userSummary",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "votes",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "available",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "locked",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "unlocked",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "claimedInterest",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "currentInterest",
              "type": "uint256"
            }
          ],
          "internalType": "struct PoSPool.UserSummary",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint64",
          "name": "votePower",
          "type": "uint64"
        }
      ],
      "name": "withdrawStake",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x60806040526127106001556103e8600255683635c9adc5dea000006003556202a30060045561016d600454620000369190620001bf565b600555612328600855610e106007600454620000539190620001bf565b6200005f919062000162565b6009553480156200006f57600080fd5b5062000090620000846200009660201b60201c565b6200009e60201b60201c565b62000259565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60006200016f8262000220565b91506200017c8362000220565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115620001b457620001b36200022a565b5b828201905092915050565b6000620001cc8262000220565b9150620001d98362000220565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156200021557620002146200022a565b5b828202905092915050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6157ff80620002696000396000f3fe60806040526004361061021a5760003560e01c806396b6b59d11610123578063d68076c3116100ab578063e83f90281161006f578063e83f9028146107c7578063ed1c2a7b146107f2578063f2fde38b1461081b578063f3466dfa14610844578063f660776b1461086f5761021a565b8063d68076c3146106cb578063e2af792814610708578063e335b45114610745578063e3d5b23314610761578063e5e20ccf1461079e5761021a565b8063b4064a25116100f2578063b4064a25146105e8578063bb61be5f14610613578063bd0b2dad1461063c578063beb99c1e14610679578063c3b8eba0146106a25761021a565b806396b6b59d1461051a5780639aafd5b814610543578063a66980021461056e578063ada9344f146105ab5761021a565b806367a1aa4f116101a65780638129fc1c116101755780638129fc1c146104595780638270512f1461047057806382df7a3b146104875780638da5cb5b146104b257806394067045146104dd5761021a565b806367a1aa4f146103c3578063715018a6146103ee57806372b65424146104055780637571fcf61461042e5761021a565b80632ab7107b116101ed5780632ab7107b146102e05780632ce7777f146103095780632eb375ea14610332578063336f8e0e1461035b5780634b1b45e6146103985761021a565b806309fecf7f1461021f5780630e589c0a1461023b5780631764618c1461027857806324a3bbe2146102a3575b600080fd5b610239600480360381019061023491906146fe565b61089a565b005b34801561024757600080fd5b50610262600480360381019061025d91906144a0565b610c3f565b60405161026f9190614c87565b60405180910390f35b34801561028457600080fd5b5061028d610cd8565b60405161029a9190614ca2565b60405180910390f35b3480156102af57600080fd5b506102ca60048036038101906102c591906144a0565b610d37565b6040516102d79190614c65565b60405180910390f35b3480156102ec57600080fd5b5061030760048036038101906103029190614686565b610d87565b005b34801561031557600080fd5b50610330600480360381019061032b91906146fe565b610f0c565b005b34801561033e57600080fd5b5061035960048036038101906103549190614686565b611285565b005b34801561036757600080fd5b50610382600480360381019061037d9190614505565b611523565b60405161038f9190614c65565b60405180910390f35b3480156103a457600080fd5b506103ad611581565b6040516103ba9190614c87565b60405180910390f35b3480156103cf57600080fd5b506103d8611594565b6040516103e59190614f81565b60405180910390f35b3480156103fa57600080fd5b5061040361159a565b005b34801561041157600080fd5b5061042c60048036038101906104279190614645565b611622565b005b34801561043a57600080fd5b506104436116b8565b6040516104509190614f4b565b60405180910390f35b34801561046557600080fd5b5061046e61173a565b005b34801561047c57600080fd5b50610485611883565b005b34801561049357600080fd5b5061049c61192e565b6040516104a99190614f81565b60405180910390f35b3480156104be57600080fd5b506104c7611b1b565b6040516104d49190614c4a565b60405180910390f35b3480156104e957600080fd5b5061050460048036038101906104ff9190614686565b611b44565b6040516105119190614c4a565b60405180910390f35b34801561052657600080fd5b50610541600480360381019061053c9190614686565b611b61565b005b34801561054f57600080fd5b50610558611c01565b6040516105659190614f81565b60405180910390f35b34801561057a57600080fd5b5061059560048036038101906105909190614505565b611c12565b6040516105a29190614c65565b60405180910390f35b3480156105b757600080fd5b506105d260048036038101906105cd91906144a0565b611c70565b6040516105df9190614c87565b60405180910390f35b3480156105f457600080fd5b506105fd611d09565b60405161060a9190614f81565b60405180910390f35b34801561061f57600080fd5b5061063a600480360381019061063591906144c9565b611d0f565b005b34801561064857600080fd5b50610663600480360381019061065e91906144a0565b611f5b565b6040516106709190614f81565b60405180910390f35b34801561068557600080fd5b506106a0600480360381019061069b91906146fe565b611f8b565b005b3480156106ae57600080fd5b506106c960048036038101906106c491906146fe565b61239a565b005b3480156106d757600080fd5b506106f260048036038101906106ed91906144a0565b6124c6565b6040516106ff9190614f81565b60405180910390f35b34801561071457600080fd5b5061072f600480360381019061072a91906144a0565b61266b565b60405161073c9190614c65565b60405180910390f35b61075f600480360381019061075a919061457d565b6126bb565b005b34801561076d57600080fd5b50610788600480360381019061078391906144a0565b6129de565b6040516107959190614f66565b60405180910390f35b3480156107aa57600080fd5b506107c560048036038101906107c091906146fe565b612b37565b005b3480156107d357600080fd5b506107dc612bc7565b6040516107e99190614f81565b60405180910390f35b3480156107fe57600080fd5b50610819600480360381019061081491906146af565b612bd7565b005b34801561082757600080fd5b50610842600480360381019061083d91906144a0565b612ceb565b005b34801561085057600080fd5b50610859612de3565b6040516108669190614d29565b60405180910390f35b34801561087b57600080fd5b50610884612e71565b6040516108919190614f81565b60405180910390f35b600760009054906101000a900460ff166108e9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108e090614deb565b60405180910390fd5b60008167ffffffffffffffff1611610936576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161092d90614e8b565b60405180910390fd5b6003548167ffffffffffffffff1661094e91906151aa565b341461098f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161098690614d4b565b60405180910390fd5b61099834612e77565b6109a181612ef9565b3373ffffffffffffffffffffffffffffffffffffffff167ff5ebfcde71acb15a758233f0c9ab25632209399b90a9209a4f2379ec5fcee89f826040516109e79190614f9c565b60405180910390a26109f7612f7b565b6109ff613027565b610a0833613106565b610a8b60405180604001604052808367ffffffffffffffff168152602001600954610a316132af565b610a3b9190615123565b815250600f60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206132b790919063ffffffff16565b610ad2600f60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020613300565b600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206002016000828254610b239190615123565b925050819055508067ffffffffffffffff16600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000016000828254610b869190615123565b925050819055508067ffffffffffffffff16600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001016000828254610be99190615123565b92505081905550610bf93361338f565b610c0d3360156134b290919063ffffffff16565b508067ffffffffffffffff16600b6000016000828254610c2d9190615123565b92505081905550610c3c6134e2565b50565b6000610c49613515565b73ffffffffffffffffffffffffffffffffffffffff16610c67611b1b565b73ffffffffffffffffffffffffffffffffffffffff1614610cbd576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cb490614e4b565b60405180910390fd5b610cd182601a6134b290919063ffffffff16565b9050919050565b6000600760009054906101000a900460ff16610d29576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d2090614deb565b60405180910390fd5b610d323061351d565b905090565b6060610d80601060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206135c3565b9050919050565b610d8f613515565b73ffffffffffffffffffffffffffffffffffffffff16610dad611b1b565b73ffffffffffffffffffffffffffffffffffffffff1614610e03576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dfa90614e4b565b60405180910390fd5b80600b6001015411610e4a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e4190614e2b565b60405180910390fd5b80610e53613710565b11610e93576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e8a90614d8b565b60405180910390fd5b60003390508073ffffffffffffffffffffffffffffffffffffffff166108fc839081150290604051600060405180830381858888f19350505050158015610ede573d6000803e3d6000fd5b50610ef782600b6001015461371890919063ffffffff16565b600b60010181905550610f086134e2565b5050565b600760009054906101000a900460ff16610f5b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f5290614deb565b60405180910390fd5b610fa2601060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020613300565b600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206003016000828254610ff39190615123565b925050819055508067ffffffffffffffff16600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600301541015611089576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161108090614f2b565b60405180910390fd5b6110a96003548267ffffffffffffffff166110a491906151aa565b61372e565b8067ffffffffffffffff16600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160008282546111059190615204565b925050819055508067ffffffffffffffff16600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160008282546111689190615204565b9250508190555060003390508073ffffffffffffffffffffffffffffffffffffffff166108fc6003548467ffffffffffffffff166111a691906151aa565b9081150290604051600060405180830381858888f193505050501580156111d1573d6000803e3d6000fd5b503373ffffffffffffffffffffffffffffffffffffffff167f141ef67c4a6d3ec2adfb2f66d33c2b11de5b4f34344757554d430570b18a92ec836040516112189190614f9c565b60405180910390a26000600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000015414156112815761127f3360156137b090919063ffffffff16565b505b5050565b600760009054906101000a900460ff166112d4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112cb90614deb565b60405180910390fd5b60006112df336124c6565b905081811015611324576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161131b90614f0b565b60405180910390fd5b61132c612f7b565b611334613027565b61133d33613106565b61139282600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600401546137e090919063ffffffff16565b600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206004018190555061142d82600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206005015461371890919063ffffffff16565b600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206005018190555061147c3361338f565b60003390508073ffffffffffffffffffffffffffffffffffffffff166108fc849081150290604051600060405180830381858888f193505050501580156114c7573d6000803e3d6000fd5b503373ffffffffffffffffffffffffffffffffffffffff167fbbf701f67a7d285bbd2b9b2dc7a5fee474e6dc3c059183385da6cc9de2be34a98460405161150e9190614f81565b60405180910390a261151e6134e2565b505050565b60606115788383601060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206137f69092919063ffffffff16565b90509392505050565b600760009054906101000a900460ff1681565b60085481565b6115a2613515565b73ffffffffffffffffffffffffffffffffffffffff166115c0611b1b565b73ffffffffffffffffffffffffffffffffffffffff1614611616576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161160d90614e4b565b60405180910390fd5b6116206000613a0e565b565b61162a613515565b73ffffffffffffffffffffffffffffffffffffffff16611648611b1b565b73ffffffffffffffffffffffffffffffffffffffff161461169e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161169590614e4b565b60405180910390fd5b80600690805190602001906116b492919061422b565b5050565b6116c06142b1565b6000600b604051806060016040529081600082015481526020016001820154815260200160028201548152505090506000611710601160010154611702613710565b61371890919063ffffffff16565b90506117298183604001516137e090919063ffffffff16565b826040018181525050819250505090565b600060159054906101000a900460ff16806117625750600060149054906101000a900460ff16155b6117a1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161179890614dcb565b60405180910390fd5b60008060159054906101000a900460ff1615905080156117f2576001600060156101000a81548160ff0219169083151502179055506001600060146101000a81548160ff0219169083151502179055505b6127106001819055506103e8600281905550683635c9adc5dea000006003819055506202a30060048190555061016d60045461182e91906151aa565b600581905550612328600881905550610e10600760045461184f91906151aa565b6118599190615123565b60098190555080156118805760008060156101000a81548160ff0219169083151502179055505b50565b600760009054906101000a900460ff166118d2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118c990614deb565b60405180910390fd5b60006118dd336124c6565b905060008111611922576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161191990614eab565b60405180910390fd5b61192b81611285565b50565b6000601760010154601760000154141561194b5760009050611b18565b600080600060176000015490505b601760010154811015611a325760006017600201600083815260200190815260200160002060405180608001604052908160008201548152602001600182015481526020016002820154815260200160038201548152505090506119ca8160400151856137e090919063ffffffff16565b9350611a1c611a0d826000015183602001516119e69190615204565b6119ff6003548560600151613ad290919063ffffffff16565b613ad290919063ffffffff16565b846137e090919063ffffffff16565b9250508080611a2a90615355565b915050611959565b50601160020154611a416132af565b1115611ad8576000611a68601160010154611a5a613710565b61371890919063ffffffff16565b9050611a7d81846137e090919063ffffffff16565b9250611ad4611ac5601160020154611a936132af565b611a9d9190615204565b611ab7600354601160000154613ad290919063ffffffff16565b613ad290919063ffffffff16565b836137e090919063ffffffff16565b9150505b611b1381611b05600554611af760015487613ad290919063ffffffff16565b613ad290919063ffffffff16565b613ae890919063ffffffff16565b925050505b90565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000611b5a826015613afe90919063ffffffff16565b9050919050565b611b69613515565b73ffffffffffffffffffffffffffffffffffffffff16611b87611b1b565b73ffffffffffffffffffffffffffffffffffffffff1614611bdd576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611bd490614e4b565b60405180910390fd5b80600281905550670de0b6b3a764000081611bf891906151aa565b60038190555050565b6000611c0d6015613b18565b905090565b6060611c678383600f60008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206137f69092919063ffffffff16565b90509392505050565b6000611c7a613515565b73ffffffffffffffffffffffffffffffffffffffff16611c98611b1b565b73ffffffffffffffffffffffffffffffffffffffff1614611cee576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ce590614e4b565b60405180910390fd5b611d0282601a6137b090919063ffffffff16565b9050919050565b60095481565b611d17613515565b73ffffffffffffffffffffffffffffffffffffffff16611d35611b1b565b73ffffffffffffffffffffffffffffffffffffffff1614611d8b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d8290614e4b565b60405180910390fd5b6000600e60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001015490506000811415611de15750611f57565b611dea83613106565b6000600e60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101819055506000600e60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020181905550611ec1600f60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020613b2d565b611f3060405180604001604052808381526020018467ffffffffffffffff16815250601060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206132b790919063ffffffff16565b611f398361338f565b80600b6000016000828254611f4e9190615204565b92505081905550505b5050565b6000611f7182601a613b8f90919063ffffffff16565b15611f80576001549050611f86565b60085490505b919050565b600760009054906101000a900460ff16611fda576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611fd190614deb565b60405180910390fd5b612021600f60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020613300565b600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008282546120729190615123565b925050819055508067ffffffffffffffff16600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201541015612108576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016120ff90614e0b565b60405180910390fd5b61211181613bbf565b3373ffffffffffffffffffffffffffffffffffffffff167fd81524ca5b038be9f98b286808a6f46f99c8700bce9ab4793dc12a2dbaa4f2d8826040516121579190614f9c565b60405180910390a2612167612f7b565b61216f613027565b61217833613106565b6121fb60405180604001604052808367ffffffffffffffff1681526020016009546121a16132af565b6121ab9190615123565b815250601060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206132b790919063ffffffff16565b612242601060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020613300565b600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160008282546122939190615123565b925050819055508067ffffffffffffffff16600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160008282546122f69190615204565b925050819055508067ffffffffffffffff16600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008282546123599190615204565b925050819055506123693361338f565b8067ffffffffffffffff16600b60000160008282546123889190615204565b925050819055506123976134e2565b50565b6123a2613515565b73ffffffffffffffffffffffffffffffffffffffff166123c0611b1b565b73ffffffffffffffffffffffffffffffffffffffff1614612416576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161240d90614e4b565b60405180910390fd5b60008167ffffffffffffffff1611801561243c57506001548167ffffffffffffffff1611155b61247b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161247290614e6b565b60405180910390fd5b8067ffffffffffffffff166008819055507fe200219383a2dbe79fad4e1549a81b6057429299f33583641c5fdddcdc0b3797816040516124bb9190614f9c565b60405180910390a150565b600080600e60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206005015490506000600a5490506000601160010154612525613710565b61252f9190615204565b90506000601460008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060600160405290816000820154815260200160018201548152602001600282015481525050905060008211156125ed5760006125d46125c5600254601160000154613ad290919063ffffffff16565b84613ae890919063ffffffff16565b90506125e981856137e090919063ffffffff16565b9350505b60008160000151111561265f57600061263d6126186002548460000151613ad290919063ffffffff16565b61262f84602001518761371890919063ffffffff16565b613ad290919063ffffffff16565b905061265b61264c8289613c41565b866137e090919063ffffffff16565b9450505b83945050505050919050565b60606126b4600f60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206135c3565b9050919050565b6126c3613515565b73ffffffffffffffffffffffffffffffffffffffff166126e1611b1b565b73ffffffffffffffffffffffffffffffffffffffff1614612737576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161272e90614e4b565b60405180910390fd5b600760009054906101000a900460ff1615612787576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161277e90614ecb565b60405180910390fd5b60018667ffffffffffffffff16146127d4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016127cb90614eeb565b60405180910390fd5b6003548667ffffffffffffffff166127ec91906151aa565b341461282d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161282490614dab565b60405180910390fd5b61283634612e77565b61284587878787878787613c7a565b6001600760006101000a81548160ff0219169083151502179055508567ffffffffffffffff16600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160008282546128bc9190615123565b925050819055508567ffffffffffffffff16600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101600082825461291f9190615123565b925050819055508567ffffffffffffffff16600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008282546129829190615123565b925050819055506129923361338f565b6129a63360156134b290919063ffffffff16565b508567ffffffffffffffff16600b60000160008282546129c69190615123565b925050819055506129d56134e2565b50505050505050565b6129e66142d2565b6000600e60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060c001604052908160008201548152602001600182015481526020016002820154815260200160038201548152602001600482015481526020016005820154815250509050612ab7600f60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020613d0e565b81604001818151612ac89190615123565b91508181525050612b16601060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020613d0e565b81606001818151612b279190615123565b9150818152505080915050919050565b612b3f613515565b73ffffffffffffffffffffffffffffffffffffffff16612b5d611b1b565b73ffffffffffffffffffffffffffffffffffffffff1614612bb3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612baa90614e4b565b60405180910390fd5b8067ffffffffffffffff1660098190555050565b6000612bd233611f5b565b905090565b612bdf613515565b73ffffffffffffffffffffffffffffffffffffffff16612bfd611b1b565b73ffffffffffffffffffffffffffffffffffffffff1614612c53576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612c4a90614e4b565b60405180910390fd5b6000612c5f6015613b18565b90506000811415612c705750612ce6565b612c78612f7b565b612c80613027565b60008385612c8e9190615123565b905081811115612c9c578190505b60008590505b81811015612cda57612cc7612cc1826015613afe90919063ffffffff16565b85611d0f565b8080612cd290615355565b915050612ca2565b50612ce36134e2565b50505b505050565b612cf3613515565b73ffffffffffffffffffffffffffffffffffffffff16612d11611b1b565b73ffffffffffffffffffffffffffffffffffffffff1614612d67576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612d5e90614e4b565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415612dd7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612dce90614d6b565b60405180910390fd5b612de081613a0e565b50565b60068054612df0906152f2565b80601f0160208091040260200160405190810160405280929190818152602001828054612e1c906152f2565b8015612e695780601f10612e3e57610100808354040283529160200191612e69565b820191906000526020600020905b815481529060010190602001808311612e4c57829003601f168201915b505050505081565b600a5481565b73088800000000000000000000000000000000000273ffffffffffffffffffffffffffffffffffffffff1663b6b55f25826040518263ffffffff1660e01b8152600401612ec49190614f81565b600060405180830381600087803b158015612ede57600080fd5b505af1158015612ef2573d6000803e3d6000fd5b5050505050565b73088800000000000000000000000000000000000573ffffffffffffffffffffffffffffffffffffffff166309fecf7f826040518263ffffffff1660e01b8152600401612f469190614fb7565b600060405180830381600087803b158015612f6057600080fd5b505af1158015612f74573d6000803e3d6000fd5b5050505050565b6000601160010154612f8b613710565b612f959190615204565b90506000811480612fab57506000601160000154145b15612fb65750613025565b6000612fd2600254601160000154613ad290919063ffffffff16565b9050612ffb612fea8284613ae890919063ffffffff16565b600a546137e090919063ffffffff16565b600a8190555061301982600b600201546137e090919063ffffffff16565b600b6002018190555050505b565b6011600201546130356132af565b141561304057613104565b6000601160010154613050613710565b61305a9190615204565b905060006040518060800160405280601160020154815260200161307c6132af565b8152602001838152602001601160000154815250905060006130aa6007600454613ad290919063ffffffff16565b6130b26132af565b11156130ea576130e76130d16007600454613ad290919063ffffffff16565b6130d96132af565b61371890919063ffffffff16565b90505b61310082826017613d939092919063ffffffff16565b5050505b565b6000601460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060600160405290816000820154815260200160018201548152602001600282015481525050905060008160000151141561318557506132ac565b60006131ca6131a36002548460000151613ad290919063ffffffff16565b6131bc8460200151600a5461371890919063ffffffff16565b613ad290919063ffffffff16565b905060006131d88285613c41565b905061322f81600e60008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600501546137e090919063ffffffff16565b600e60008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206005018190555061329f61328b828461371890919063ffffffff16565b600b600101546137e090919063ffffffff16565b600b600101819055505050505b50565b600043905090565b808260020160008460010160008154809291906132d390615355565b91905055815260200190815260200160002060008201518160000155602082015181600101559050505050565b600080600090506000836000015490505b8360010154811015613385574384600201600083815260200190815260200160002060010154111561334257613385565b83600201600082815260200190815260200160002060000154826133669190615123565b915061337184613dac565b50808061337d90615355565b915050613311565b5080915050919050565b600e60008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010154601460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000181905550600a54601460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101819055506134696132af565b601460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206002018190555050565b60006134da836000018373ffffffffffffffffffffffffffffffffffffffff1660001b613e39565b905092915050565b600b600001546011600001819055506134f9613710565b60116001018190555061350a6132af565b601160020181905550565b600033905090565b600073088800000000000000000000000000000000000573ffffffffffffffffffffffffffffffffffffffff16636a06ea96836040518263ffffffff1660e01b815260040161356c9190614c4a565b60206040518083038186803b15801561358457600080fd5b505afa158015613598573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906135bc9190614554565b9050919050565b60606000826000015483600101546135db9190615204565b67ffffffffffffffff81111561361a577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405190808252806020026020018201604052801561365357816020015b613640614308565b8152602001906001900390816136385790505b5090506000836000015490505b83600101548110156137065783600201600082815260200190815260200160002060405180604001604052908160008201548152602001600182015481525050828560000154836136b19190615204565b815181106136e8577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001018190525080806136fe90615355565b915050613660565b5080915050919050565b600047905090565b600081836137269190615204565b905092915050565b73088800000000000000000000000000000000000273ffffffffffffffffffffffffffffffffffffffff16632e1a7d4d826040518263ffffffff1660e01b815260040161377b9190614f81565b600060405180830381600087803b15801561379557600080fd5b505af11580156137a9573d6000803e3d6000fd5b5050505050565b60006137d8836000018373ffffffffffffffffffffffffffffffffffffffff1660001b613ea9565b905092915050565b600081836137ee9190615123565b905092915050565b606060008367ffffffffffffffff1685600001546138149190615123565b9050846001015481106138a457600067ffffffffffffffff811115613862577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405190808252806020026020018201604052801561389b57816020015b613888614308565b8152602001906001900390816138805790505b50915050613a07565b60008367ffffffffffffffff16826138bc9190615123565b905085600101548111156138d257856001015490505b600082826138e09190615204565b67ffffffffffffffff81111561391f577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405190808252806020026020018201604052801561395857816020015b613945614308565b81526020019060019003908161393d5790505b50905060008390505b828110156139ff57876002016000828152602001908152602001600020604051806040016040529081600082015481526020016001820154815250508285836139aa9190615204565b815181106139e1577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001018190525080806139f790615355565b915050613961565b508093505050505b9392505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60008183613ae091906151aa565b905092915050565b60008183613af69190615179565b905092915050565b6000613b0d836000018361402f565b60001c905092915050565b6000613b2682600001614080565b9050919050565b6000816000015490505b8160010154811015613b7e57816002016000828152602001908152602001600020600080820160009055600182016000905550508080613b7690615355565b915050613b37565b508060010154816000018190555050565b6000613bb7836000018373ffffffffffffffffffffffffffffffffffffffff1660001b614091565b905092915050565b73088800000000000000000000000000000000000573ffffffffffffffffffffffffffffffffffffffff1663f49d0638826040518263ffffffff1660e01b8152600401613c0c9190614fb7565b600060405180830381600087803b158015613c2657600080fd5b505af1158015613c3a573d6000803e3d6000fd5b5050505050565b6000613c72600154613c64613c5585611f5b565b86613ad290919063ffffffff16565b613ae890919063ffffffff16565b905092915050565b73088800000000000000000000000000000000000573ffffffffffffffffffffffffffffffffffffffff1663e335b451888888888888886040518863ffffffff1660e01b8152600401613cd39796959493929190614cbd565b600060405180830381600087803b158015613ced57600080fd5b505af1158015613d01573d6000803e3d6000fd5b5050505050505050505050565b600080600090506000836000015490505b8360010154811015613d895743846002016000838152602001908152602001600020600101541115613d5057613d89565b8360020160008281526020019081526020016000206000015482613d749190615123565b91508080613d8190615355565b915050613d1f565b5080915050919050565b613d9d83836140b4565b613da78382614111565b505050565b613db4614308565b600082600201600084600001548152602001908152602001600020604051806040016040529081600082015481526020016001820154815250509050826002016000846000016000815480929190613e0b90615355565b9190505581526020019081526020016000206000808201600090556001820160009055505080915050919050565b6000613e458383614091565b613e9e578260000182908060018154018082558091505060019003906000526020600020016000909190919091505582600001805490508360010160008481526020019081526020016000208190555060019050613ea3565b600090505b92915050565b60008083600101600084815260200190815260200160002054905060008114614023576000600182613edb9190615204565b9050600060018660000180549050613ef39190615204565b9050818114613fae576000866000018281548110613f3a577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200154905080876000018481548110613f84577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90600052602060002001819055508387600101600083815260200190815260200160002081905550505b85600001805480613fe8577f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b600190038181906000526020600020016000905590558560010160008681526020019081526020016000206000905560019350505050614029565b60009150505b92915050565b600082600001828154811061406d577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200154905092915050565b600081600001805490509050919050565b600080836001016000848152602001908152602001600020541415905092915050565b808260020160008460010160008154809291906140d090615355565b919050558152602001908152602001600020600082015181600001556020820151816001015560408201518160020155606082015181600301559050505050565b60008260000154905060008360010154905060008290505b81811015614173578385600201600083815260200190815260200160002060010154111561415657614173565b61415f8561417a565b50808061416b90615355565b915050614129565b5050505050565b614182614322565b60008260020160008460000154815260200190815260200160002060405180608001604052908160008201548152602001600182015481526020016002820154815260200160038201548152505090508260020160008460000160008154809291906141ed90615355565b919050558152602001908152602001600020600080820160009055600182016000905560028201600090556003820160009055505080915050919050565b828054614237906152f2565b90600052602060002090601f01602090048101928261425957600085556142a0565b82601f1061427257805160ff19168380011785556142a0565b828001600101855582156142a0579182015b8281111561429f578251825591602001919060010190614284565b5b5090506142ad919061434a565b5090565b60405180606001604052806000815260200160008152602001600081525090565b6040518060c001604052806000815260200160008152602001600081526020016000815260200160008152602001600081525090565b604051806040016040528060008152602001600081525090565b6040518060800160405280600081526020016000815260200160008152602001600081525090565b5b8082111561436357600081600090555060010161434b565b5090565b600061437a61437584614ff7565b614fd2565b90508281526020810184848401111561439257600080fd5b61439d8482856152b0565b509392505050565b6000813590506143b48161576d565b92915050565b6000819050826020600202820111156143d257600080fd5b92915050565b6000813590506143e781615784565b92915050565b6000815190506143fc81615784565b92915050565b60008083601f84011261441457600080fd5b8235905067ffffffffffffffff81111561442d57600080fd5b60208301915083600182028301111561444557600080fd5b9250929050565b600082601f83011261445d57600080fd5b813561446d848260208601614367565b91505092915050565b6000813590506144858161579b565b92915050565b60008135905061449a816157b2565b92915050565b6000602082840312156144b257600080fd5b60006144c0848285016143a5565b91505092915050565b600080604083850312156144dc57600080fd5b60006144ea858286016143a5565b92505060206144fb8582860161448b565b9150509250929050565b60008060006060848603121561451a57600080fd5b6000614528868287016143a5565b93505060206145398682870161448b565b925050604061454a8682870161448b565b9150509250925092565b60006020828403121561456657600080fd5b6000614574848285016143ed565b91505092915050565b600080600080600080600060a0888a03121561459857600080fd5b60006145a68a828b016143d8565b97505060206145b78a828b0161448b565b965050604088013567ffffffffffffffff8111156145d457600080fd5b6145e08a828b01614402565b9550955050606088013567ffffffffffffffff8111156145ff57600080fd5b61460b8a828b01614402565b9350935050608088013567ffffffffffffffff81111561462a57600080fd5b6146368a828b016143ba565b91505092959891949750929550565b60006020828403121561465757600080fd5b600082013567ffffffffffffffff81111561467157600080fd5b61467d8482850161444c565b91505092915050565b60006020828403121561469857600080fd5b60006146a684828501614476565b91505092915050565b6000806000606084860312156146c457600080fd5b60006146d286828701614476565b93505060206146e386828701614476565b92505060406146f48682870161448b565b9150509250925092565b60006020828403121561471057600080fd5b600061471e8482850161448b565b91505092915050565b600061473484848461485f565b90509392505050565b60006147498383614b64565b60408301905092915050565b61475e81615238565b82525050565b600061476f82615042565b614779818561507d565b93508360208202850161478b85615028565b8060005b858110156147d15784840389526147a682846150cc565b6147b1868284614727565b95506147bc84615063565b935060208b019a50505060018101905061478f565b50829750879550505050505092915050565b60006147ee8261504d565b6147f88185615088565b935061480383615032565b8060005b8381101561483457815161481b888261473d565b975061482683615070565b925050600181019050614807565b5085935050505092915050565b61484a8161524a565b82525050565b61485981615256565b82525050565b600061486b8385615099565b93506148788385846152b0565b6148818361545a565b840190509392505050565b600061489883856150aa565b93506148a58385846152b0565b6148ae8361545a565b840190509392505050565b60006148c482615058565b6148ce81856150bb565b93506148de8185602086016152bf565b6148e78161545a565b840191505092915050565b60006148ff602a836150bb565b915061490a8261546b565b604082019050919050565b60006149226026836150bb565b915061492d826154ba565b604082019050919050565b60006149456012836150bb565b915061495082615509565b602082019050919050565b6000614968601c836150bb565b915061497382615532565b602082019050919050565b600061498b602e836150bb565b91506149968261555b565b604082019050919050565b60006149ae6014836150bb565b91506149b9826155aa565b602082019050919050565b60006149d16014836150bb565b91506149dc826155d3565b602082019050919050565b60006149f46013836150bb565b91506149ff826155fc565b602082019050919050565b6000614a176020836150bb565b9150614a2282615625565b602082019050919050565b6000614a3a6017836150bb565b9150614a458261564e565b602082019050919050565b6000614a5d6016836150bb565b9150614a6882615677565b602082019050919050565b6000614a806015836150bb565b9150614a8b826156a0565b602082019050919050565b6000614aa36018836150bb565b9150614aae826156c9565b602082019050919050565b6000614ac66015836150bb565b9150614ad1826156f2565b602082019050919050565b6000614ae96013836150bb565b9150614af48261571b565b602082019050919050565b6000614b0c6016836150bb565b9150614b1782615744565b602082019050919050565b606082016000820151614b386000850182614c0e565b506020820151614b4b6020850182614c0e565b506040820151614b5e6040850182614c0e565b50505050565b604082016000820151614b7a6000850182614c0e565b506020820151614b8d6020850182614c0e565b50505050565b60c082016000820151614ba96000850182614c0e565b506020820151614bbc6020850182614c0e565b506040820151614bcf6040850182614c0e565b506060820151614be26060850182614c0e565b506080820151614bf56080850182614c0e565b5060a0820151614c0860a0850182614c0e565b50505050565b614c1781615280565b82525050565b614c2681615280565b82525050565b614c358161529e565b82525050565b614c448161528a565b82525050565b6000602082019050614c5f6000830184614755565b92915050565b60006020820190508181036000830152614c7f81846147e3565b905092915050565b6000602082019050614c9c6000830184614841565b92915050565b6000602082019050614cb76000830184614850565b92915050565b600060a082019050614cd2600083018a614850565b614cdf6020830189614c3b565b8181036040830152614cf281878961488c565b90508181036060830152614d0781858761488c565b90508181036080830152614d1b8184614764565b905098975050505050505050565b60006020820190508181036000830152614d4381846148b9565b905092915050565b60006020820190508181036000830152614d64816148f2565b9050919050565b60006020820190508181036000830152614d8481614915565b9050919050565b60006020820190508181036000830152614da481614938565b9050919050565b60006020820190508181036000830152614dc48161495b565b9050919050565b60006020820190508181036000830152614de48161497e565b9050919050565b60006020820190508181036000830152614e04816149a1565b9050919050565b60006020820190508181036000830152614e24816149c4565b9050919050565b60006020820190508181036000830152614e44816149e7565b9050919050565b60006020820190508181036000830152614e6481614a0a565b9050919050565b60006020820190508181036000830152614e8481614a2d565b9050919050565b60006020820190508181036000830152614ea481614a50565b9050919050565b60006020820190508181036000830152614ec481614a73565b9050919050565b60006020820190508181036000830152614ee481614a96565b9050919050565b60006020820190508181036000830152614f0481614ab9565b9050919050565b60006020820190508181036000830152614f2481614adc565b9050919050565b60006020820190508181036000830152614f4481614aff565b9050919050565b6000606082019050614f606000830184614b22565b92915050565b600060c082019050614f7b6000830184614b93565b92915050565b6000602082019050614f966000830184614c1d565b92915050565b6000602082019050614fb16000830184614c2c565b92915050565b6000602082019050614fcc6000830184614c3b565b92915050565b6000614fdc614fed565b9050614fe88282615324565b919050565b6000604051905090565b600067ffffffffffffffff8211156150125761501161542b565b5b61501b8261545a565b9050602081019050919050565b6000819050919050565b6000819050602082019050919050565b600060029050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b6000602082019050919050565b600081905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600080833560016020038436030381126150e557600080fd5b83810192508235915060208301925067ffffffffffffffff82111561510957600080fd5b60018202360384131561511b57600080fd5b509250929050565b600061512e82615280565b915061513983615280565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561516e5761516d61539e565b5b828201905092915050565b600061518482615280565b915061518f83615280565b92508261519f5761519e6153cd565b5b828204905092915050565b60006151b582615280565b91506151c083615280565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156151f9576151f861539e565b5b828202905092915050565b600061520f82615280565b915061521a83615280565b92508282101561522d5761522c61539e565b5b828203905092915050565b600061524382615260565b9050919050565b60008115159050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600067ffffffffffffffff82169050919050565b60006152a98261528a565b9050919050565b82818337600083830152505050565b60005b838110156152dd5780820151818401526020810190506152c2565b838111156152ec576000848401525b50505050565b6000600282049050600182168061530a57607f821691505b6020821081141561531e5761531d6153fc565b5b50919050565b61532d8261545a565b810181811067ffffffffffffffff8211171561534c5761534b61542b565b5b80604052505050565b600061536082615280565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156153935761539261539e565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f6d73672e76616c75652073686f756c6420626520766f7465506f776572202a2060008201527f3130303020657468657200000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f42616c616e6365206e6f7420656e6f7567680000000000000000000000000000600082015250565b7f6d73672e76616c75652073686f756c6420626520313030302043465800000000600082015250565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b7f506f6f6c206973206e6f74207265676973746564000000000000000000000000600082015250565b7f4c6f636b6564206973206e6f7420656e6f756768000000000000000000000000600082015250565b7f4e6f7420656e6f75676820696e74657265737400000000000000000000000000600082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f726174696f2073686f756c6420626520312d3130303030000000000000000000600082015250565b7f4d696e696d616c20766f7465506f776572206973203100000000000000000000600082015250565b7f4e6f20636c61696d61626c6520696e7465726573740000000000000000000000600082015250565b7f506f6f6c20697320616c72656164792072656769737465640000000000000000600082015250565b7f766f7465506f7765722073686f756c6420626520310000000000000000000000600082015250565b7f496e746572657374206e6f7420656e6f75676800000000000000000000000000600082015250565b7f556e6c6f636b6564206973206e6f7420656e6f75676800000000000000000000600082015250565b61577681615238565b811461578157600080fd5b50565b61578d81615256565b811461579857600080fd5b50565b6157a481615280565b81146157af57600080fd5b50565b6157bb8161528a565b81146157c657600080fd5b5056fea2646970667358221220b05628409c9d951bc1a0e355438054bb4172280c857129e5a38d6c1918a0d99564736f6c63430008040033",
  "deployedBytecode": "0x60806040526004361061021a5760003560e01c806396b6b59d11610123578063d68076c3116100ab578063e83f90281161006f578063e83f9028146107c7578063ed1c2a7b146107f2578063f2fde38b1461081b578063f3466dfa14610844578063f660776b1461086f5761021a565b8063d68076c3146106cb578063e2af792814610708578063e335b45114610745578063e3d5b23314610761578063e5e20ccf1461079e5761021a565b8063b4064a25116100f2578063b4064a25146105e8578063bb61be5f14610613578063bd0b2dad1461063c578063beb99c1e14610679578063c3b8eba0146106a25761021a565b806396b6b59d1461051a5780639aafd5b814610543578063a66980021461056e578063ada9344f146105ab5761021a565b806367a1aa4f116101a65780638129fc1c116101755780638129fc1c146104595780638270512f1461047057806382df7a3b146104875780638da5cb5b146104b257806394067045146104dd5761021a565b806367a1aa4f146103c3578063715018a6146103ee57806372b65424146104055780637571fcf61461042e5761021a565b80632ab7107b116101ed5780632ab7107b146102e05780632ce7777f146103095780632eb375ea14610332578063336f8e0e1461035b5780634b1b45e6146103985761021a565b806309fecf7f1461021f5780630e589c0a1461023b5780631764618c1461027857806324a3bbe2146102a3575b600080fd5b610239600480360381019061023491906146fe565b61089a565b005b34801561024757600080fd5b50610262600480360381019061025d91906144a0565b610c3f565b60405161026f9190614c87565b60405180910390f35b34801561028457600080fd5b5061028d610cd8565b60405161029a9190614ca2565b60405180910390f35b3480156102af57600080fd5b506102ca60048036038101906102c591906144a0565b610d37565b6040516102d79190614c65565b60405180910390f35b3480156102ec57600080fd5b5061030760048036038101906103029190614686565b610d87565b005b34801561031557600080fd5b50610330600480360381019061032b91906146fe565b610f0c565b005b34801561033e57600080fd5b5061035960048036038101906103549190614686565b611285565b005b34801561036757600080fd5b50610382600480360381019061037d9190614505565b611523565b60405161038f9190614c65565b60405180910390f35b3480156103a457600080fd5b506103ad611581565b6040516103ba9190614c87565b60405180910390f35b3480156103cf57600080fd5b506103d8611594565b6040516103e59190614f81565b60405180910390f35b3480156103fa57600080fd5b5061040361159a565b005b34801561041157600080fd5b5061042c60048036038101906104279190614645565b611622565b005b34801561043a57600080fd5b506104436116b8565b6040516104509190614f4b565b60405180910390f35b34801561046557600080fd5b5061046e61173a565b005b34801561047c57600080fd5b50610485611883565b005b34801561049357600080fd5b5061049c61192e565b6040516104a99190614f81565b60405180910390f35b3480156104be57600080fd5b506104c7611b1b565b6040516104d49190614c4a565b60405180910390f35b3480156104e957600080fd5b5061050460048036038101906104ff9190614686565b611b44565b6040516105119190614c4a565b60405180910390f35b34801561052657600080fd5b50610541600480360381019061053c9190614686565b611b61565b005b34801561054f57600080fd5b50610558611c01565b6040516105659190614f81565b60405180910390f35b34801561057a57600080fd5b5061059560048036038101906105909190614505565b611c12565b6040516105a29190614c65565b60405180910390f35b3480156105b757600080fd5b506105d260048036038101906105cd91906144a0565b611c70565b6040516105df9190614c87565b60405180910390f35b3480156105f457600080fd5b506105fd611d09565b60405161060a9190614f81565b60405180910390f35b34801561061f57600080fd5b5061063a600480360381019061063591906144c9565b611d0f565b005b34801561064857600080fd5b50610663600480360381019061065e91906144a0565b611f5b565b6040516106709190614f81565b60405180910390f35b34801561068557600080fd5b506106a0600480360381019061069b91906146fe565b611f8b565b005b3480156106ae57600080fd5b506106c960048036038101906106c491906146fe565b61239a565b005b3480156106d757600080fd5b506106f260048036038101906106ed91906144a0565b6124c6565b6040516106ff9190614f81565b60405180910390f35b34801561071457600080fd5b5061072f600480360381019061072a91906144a0565b61266b565b60405161073c9190614c65565b60405180910390f35b61075f600480360381019061075a919061457d565b6126bb565b005b34801561076d57600080fd5b50610788600480360381019061078391906144a0565b6129de565b6040516107959190614f66565b60405180910390f35b3480156107aa57600080fd5b506107c560048036038101906107c091906146fe565b612b37565b005b3480156107d357600080fd5b506107dc612bc7565b6040516107e99190614f81565b60405180910390f35b3480156107fe57600080fd5b50610819600480360381019061081491906146af565b612bd7565b005b34801561082757600080fd5b50610842600480360381019061083d91906144a0565b612ceb565b005b34801561085057600080fd5b50610859612de3565b6040516108669190614d29565b60405180910390f35b34801561087b57600080fd5b50610884612e71565b6040516108919190614f81565b60405180910390f35b600760009054906101000a900460ff166108e9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108e090614deb565b60405180910390fd5b60008167ffffffffffffffff1611610936576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161092d90614e8b565b60405180910390fd5b6003548167ffffffffffffffff1661094e91906151aa565b341461098f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161098690614d4b565b60405180910390fd5b61099834612e77565b6109a181612ef9565b3373ffffffffffffffffffffffffffffffffffffffff167ff5ebfcde71acb15a758233f0c9ab25632209399b90a9209a4f2379ec5fcee89f826040516109e79190614f9c565b60405180910390a26109f7612f7b565b6109ff613027565b610a0833613106565b610a8b60405180604001604052808367ffffffffffffffff168152602001600954610a316132af565b610a3b9190615123565b815250600f60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206132b790919063ffffffff16565b610ad2600f60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020613300565b600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206002016000828254610b239190615123565b925050819055508067ffffffffffffffff16600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000016000828254610b869190615123565b925050819055508067ffffffffffffffff16600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001016000828254610be99190615123565b92505081905550610bf93361338f565b610c0d3360156134b290919063ffffffff16565b508067ffffffffffffffff16600b6000016000828254610c2d9190615123565b92505081905550610c3c6134e2565b50565b6000610c49613515565b73ffffffffffffffffffffffffffffffffffffffff16610c67611b1b565b73ffffffffffffffffffffffffffffffffffffffff1614610cbd576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cb490614e4b565b60405180910390fd5b610cd182601a6134b290919063ffffffff16565b9050919050565b6000600760009054906101000a900460ff16610d29576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d2090614deb565b60405180910390fd5b610d323061351d565b905090565b6060610d80601060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206135c3565b9050919050565b610d8f613515565b73ffffffffffffffffffffffffffffffffffffffff16610dad611b1b565b73ffffffffffffffffffffffffffffffffffffffff1614610e03576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dfa90614e4b565b60405180910390fd5b80600b6001015411610e4a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e4190614e2b565b60405180910390fd5b80610e53613710565b11610e93576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e8a90614d8b565b60405180910390fd5b60003390508073ffffffffffffffffffffffffffffffffffffffff166108fc839081150290604051600060405180830381858888f19350505050158015610ede573d6000803e3d6000fd5b50610ef782600b6001015461371890919063ffffffff16565b600b60010181905550610f086134e2565b5050565b600760009054906101000a900460ff16610f5b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f5290614deb565b60405180910390fd5b610fa2601060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020613300565b600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206003016000828254610ff39190615123565b925050819055508067ffffffffffffffff16600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600301541015611089576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161108090614f2b565b60405180910390fd5b6110a96003548267ffffffffffffffff166110a491906151aa565b61372e565b8067ffffffffffffffff16600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160008282546111059190615204565b925050819055508067ffffffffffffffff16600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160008282546111689190615204565b9250508190555060003390508073ffffffffffffffffffffffffffffffffffffffff166108fc6003548467ffffffffffffffff166111a691906151aa565b9081150290604051600060405180830381858888f193505050501580156111d1573d6000803e3d6000fd5b503373ffffffffffffffffffffffffffffffffffffffff167f141ef67c4a6d3ec2adfb2f66d33c2b11de5b4f34344757554d430570b18a92ec836040516112189190614f9c565b60405180910390a26000600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000015414156112815761127f3360156137b090919063ffffffff16565b505b5050565b600760009054906101000a900460ff166112d4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112cb90614deb565b60405180910390fd5b60006112df336124c6565b905081811015611324576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161131b90614f0b565b60405180910390fd5b61132c612f7b565b611334613027565b61133d33613106565b61139282600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600401546137e090919063ffffffff16565b600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206004018190555061142d82600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206005015461371890919063ffffffff16565b600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206005018190555061147c3361338f565b60003390508073ffffffffffffffffffffffffffffffffffffffff166108fc849081150290604051600060405180830381858888f193505050501580156114c7573d6000803e3d6000fd5b503373ffffffffffffffffffffffffffffffffffffffff167fbbf701f67a7d285bbd2b9b2dc7a5fee474e6dc3c059183385da6cc9de2be34a98460405161150e9190614f81565b60405180910390a261151e6134e2565b505050565b60606115788383601060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206137f69092919063ffffffff16565b90509392505050565b600760009054906101000a900460ff1681565b60085481565b6115a2613515565b73ffffffffffffffffffffffffffffffffffffffff166115c0611b1b565b73ffffffffffffffffffffffffffffffffffffffff1614611616576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161160d90614e4b565b60405180910390fd5b6116206000613a0e565b565b61162a613515565b73ffffffffffffffffffffffffffffffffffffffff16611648611b1b565b73ffffffffffffffffffffffffffffffffffffffff161461169e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161169590614e4b565b60405180910390fd5b80600690805190602001906116b492919061422b565b5050565b6116c06142b1565b6000600b604051806060016040529081600082015481526020016001820154815260200160028201548152505090506000611710601160010154611702613710565b61371890919063ffffffff16565b90506117298183604001516137e090919063ffffffff16565b826040018181525050819250505090565b600060159054906101000a900460ff16806117625750600060149054906101000a900460ff16155b6117a1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161179890614dcb565b60405180910390fd5b60008060159054906101000a900460ff1615905080156117f2576001600060156101000a81548160ff0219169083151502179055506001600060146101000a81548160ff0219169083151502179055505b6127106001819055506103e8600281905550683635c9adc5dea000006003819055506202a30060048190555061016d60045461182e91906151aa565b600581905550612328600881905550610e10600760045461184f91906151aa565b6118599190615123565b60098190555080156118805760008060156101000a81548160ff0219169083151502179055505b50565b600760009054906101000a900460ff166118d2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118c990614deb565b60405180910390fd5b60006118dd336124c6565b905060008111611922576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161191990614eab565b60405180910390fd5b61192b81611285565b50565b6000601760010154601760000154141561194b5760009050611b18565b600080600060176000015490505b601760010154811015611a325760006017600201600083815260200190815260200160002060405180608001604052908160008201548152602001600182015481526020016002820154815260200160038201548152505090506119ca8160400151856137e090919063ffffffff16565b9350611a1c611a0d826000015183602001516119e69190615204565b6119ff6003548560600151613ad290919063ffffffff16565b613ad290919063ffffffff16565b846137e090919063ffffffff16565b9250508080611a2a90615355565b915050611959565b50601160020154611a416132af565b1115611ad8576000611a68601160010154611a5a613710565b61371890919063ffffffff16565b9050611a7d81846137e090919063ffffffff16565b9250611ad4611ac5601160020154611a936132af565b611a9d9190615204565b611ab7600354601160000154613ad290919063ffffffff16565b613ad290919063ffffffff16565b836137e090919063ffffffff16565b9150505b611b1381611b05600554611af760015487613ad290919063ffffffff16565b613ad290919063ffffffff16565b613ae890919063ffffffff16565b925050505b90565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000611b5a826015613afe90919063ffffffff16565b9050919050565b611b69613515565b73ffffffffffffffffffffffffffffffffffffffff16611b87611b1b565b73ffffffffffffffffffffffffffffffffffffffff1614611bdd576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611bd490614e4b565b60405180910390fd5b80600281905550670de0b6b3a764000081611bf891906151aa565b60038190555050565b6000611c0d6015613b18565b905090565b6060611c678383600f60008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206137f69092919063ffffffff16565b90509392505050565b6000611c7a613515565b73ffffffffffffffffffffffffffffffffffffffff16611c98611b1b565b73ffffffffffffffffffffffffffffffffffffffff1614611cee576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ce590614e4b565b60405180910390fd5b611d0282601a6137b090919063ffffffff16565b9050919050565b60095481565b611d17613515565b73ffffffffffffffffffffffffffffffffffffffff16611d35611b1b565b73ffffffffffffffffffffffffffffffffffffffff1614611d8b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d8290614e4b565b60405180910390fd5b6000600e60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001015490506000811415611de15750611f57565b611dea83613106565b6000600e60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101819055506000600e60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020181905550611ec1600f60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020613b2d565b611f3060405180604001604052808381526020018467ffffffffffffffff16815250601060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206132b790919063ffffffff16565b611f398361338f565b80600b6000016000828254611f4e9190615204565b92505081905550505b5050565b6000611f7182601a613b8f90919063ffffffff16565b15611f80576001549050611f86565b60085490505b919050565b600760009054906101000a900460ff16611fda576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611fd190614deb565b60405180910390fd5b612021600f60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020613300565b600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008282546120729190615123565b925050819055508067ffffffffffffffff16600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201541015612108576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016120ff90614e0b565b60405180910390fd5b61211181613bbf565b3373ffffffffffffffffffffffffffffffffffffffff167fd81524ca5b038be9f98b286808a6f46f99c8700bce9ab4793dc12a2dbaa4f2d8826040516121579190614f9c565b60405180910390a2612167612f7b565b61216f613027565b61217833613106565b6121fb60405180604001604052808367ffffffffffffffff1681526020016009546121a16132af565b6121ab9190615123565b815250601060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206132b790919063ffffffff16565b612242601060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020613300565b600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160008282546122939190615123565b925050819055508067ffffffffffffffff16600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160008282546122f69190615204565b925050819055508067ffffffffffffffff16600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008282546123599190615204565b925050819055506123693361338f565b8067ffffffffffffffff16600b60000160008282546123889190615204565b925050819055506123976134e2565b50565b6123a2613515565b73ffffffffffffffffffffffffffffffffffffffff166123c0611b1b565b73ffffffffffffffffffffffffffffffffffffffff1614612416576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161240d90614e4b565b60405180910390fd5b60008167ffffffffffffffff1611801561243c57506001548167ffffffffffffffff1611155b61247b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161247290614e6b565b60405180910390fd5b8067ffffffffffffffff166008819055507fe200219383a2dbe79fad4e1549a81b6057429299f33583641c5fdddcdc0b3797816040516124bb9190614f9c565b60405180910390a150565b600080600e60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206005015490506000600a5490506000601160010154612525613710565b61252f9190615204565b90506000601460008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060600160405290816000820154815260200160018201548152602001600282015481525050905060008211156125ed5760006125d46125c5600254601160000154613ad290919063ffffffff16565b84613ae890919063ffffffff16565b90506125e981856137e090919063ffffffff16565b9350505b60008160000151111561265f57600061263d6126186002548460000151613ad290919063ffffffff16565b61262f84602001518761371890919063ffffffff16565b613ad290919063ffffffff16565b905061265b61264c8289613c41565b866137e090919063ffffffff16565b9450505b83945050505050919050565b60606126b4600f60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206135c3565b9050919050565b6126c3613515565b73ffffffffffffffffffffffffffffffffffffffff166126e1611b1b565b73ffffffffffffffffffffffffffffffffffffffff1614612737576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161272e90614e4b565b60405180910390fd5b600760009054906101000a900460ff1615612787576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161277e90614ecb565b60405180910390fd5b60018667ffffffffffffffff16146127d4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016127cb90614eeb565b60405180910390fd5b6003548667ffffffffffffffff166127ec91906151aa565b341461282d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161282490614dab565b60405180910390fd5b61283634612e77565b61284587878787878787613c7a565b6001600760006101000a81548160ff0219169083151502179055508567ffffffffffffffff16600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160008282546128bc9190615123565b925050819055508567ffffffffffffffff16600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101600082825461291f9190615123565b925050819055508567ffffffffffffffff16600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008282546129829190615123565b925050819055506129923361338f565b6129a63360156134b290919063ffffffff16565b508567ffffffffffffffff16600b60000160008282546129c69190615123565b925050819055506129d56134e2565b50505050505050565b6129e66142d2565b6000600e60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060c001604052908160008201548152602001600182015481526020016002820154815260200160038201548152602001600482015481526020016005820154815250509050612ab7600f60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020613d0e565b81604001818151612ac89190615123565b91508181525050612b16601060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020613d0e565b81606001818151612b279190615123565b9150818152505080915050919050565b612b3f613515565b73ffffffffffffffffffffffffffffffffffffffff16612b5d611b1b565b73ffffffffffffffffffffffffffffffffffffffff1614612bb3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612baa90614e4b565b60405180910390fd5b8067ffffffffffffffff1660098190555050565b6000612bd233611f5b565b905090565b612bdf613515565b73ffffffffffffffffffffffffffffffffffffffff16612bfd611b1b565b73ffffffffffffffffffffffffffffffffffffffff1614612c53576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612c4a90614e4b565b60405180910390fd5b6000612c5f6015613b18565b90506000811415612c705750612ce6565b612c78612f7b565b612c80613027565b60008385612c8e9190615123565b905081811115612c9c578190505b60008590505b81811015612cda57612cc7612cc1826015613afe90919063ffffffff16565b85611d0f565b8080612cd290615355565b915050612ca2565b50612ce36134e2565b50505b505050565b612cf3613515565b73ffffffffffffffffffffffffffffffffffffffff16612d11611b1b565b73ffffffffffffffffffffffffffffffffffffffff1614612d67576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612d5e90614e4b565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415612dd7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612dce90614d6b565b60405180910390fd5b612de081613a0e565b50565b60068054612df0906152f2565b80601f0160208091040260200160405190810160405280929190818152602001828054612e1c906152f2565b8015612e695780601f10612e3e57610100808354040283529160200191612e69565b820191906000526020600020905b815481529060010190602001808311612e4c57829003601f168201915b505050505081565b600a5481565b73088800000000000000000000000000000000000273ffffffffffffffffffffffffffffffffffffffff1663b6b55f25826040518263ffffffff1660e01b8152600401612ec49190614f81565b600060405180830381600087803b158015612ede57600080fd5b505af1158015612ef2573d6000803e3d6000fd5b5050505050565b73088800000000000000000000000000000000000573ffffffffffffffffffffffffffffffffffffffff166309fecf7f826040518263ffffffff1660e01b8152600401612f469190614fb7565b600060405180830381600087803b158015612f6057600080fd5b505af1158015612f74573d6000803e3d6000fd5b5050505050565b6000601160010154612f8b613710565b612f959190615204565b90506000811480612fab57506000601160000154145b15612fb65750613025565b6000612fd2600254601160000154613ad290919063ffffffff16565b9050612ffb612fea8284613ae890919063ffffffff16565b600a546137e090919063ffffffff16565b600a8190555061301982600b600201546137e090919063ffffffff16565b600b6002018190555050505b565b6011600201546130356132af565b141561304057613104565b6000601160010154613050613710565b61305a9190615204565b905060006040518060800160405280601160020154815260200161307c6132af565b8152602001838152602001601160000154815250905060006130aa6007600454613ad290919063ffffffff16565b6130b26132af565b11156130ea576130e76130d16007600454613ad290919063ffffffff16565b6130d96132af565b61371890919063ffffffff16565b90505b61310082826017613d939092919063ffffffff16565b5050505b565b6000601460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060600160405290816000820154815260200160018201548152602001600282015481525050905060008160000151141561318557506132ac565b60006131ca6131a36002548460000151613ad290919063ffffffff16565b6131bc8460200151600a5461371890919063ffffffff16565b613ad290919063ffffffff16565b905060006131d88285613c41565b905061322f81600e60008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600501546137e090919063ffffffff16565b600e60008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206005018190555061329f61328b828461371890919063ffffffff16565b600b600101546137e090919063ffffffff16565b600b600101819055505050505b50565b600043905090565b808260020160008460010160008154809291906132d390615355565b91905055815260200190815260200160002060008201518160000155602082015181600101559050505050565b600080600090506000836000015490505b8360010154811015613385574384600201600083815260200190815260200160002060010154111561334257613385565b83600201600082815260200190815260200160002060000154826133669190615123565b915061337184613dac565b50808061337d90615355565b915050613311565b5080915050919050565b600e60008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010154601460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000181905550600a54601460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101819055506134696132af565b601460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206002018190555050565b60006134da836000018373ffffffffffffffffffffffffffffffffffffffff1660001b613e39565b905092915050565b600b600001546011600001819055506134f9613710565b60116001018190555061350a6132af565b601160020181905550565b600033905090565b600073088800000000000000000000000000000000000573ffffffffffffffffffffffffffffffffffffffff16636a06ea96836040518263ffffffff1660e01b815260040161356c9190614c4a565b60206040518083038186803b15801561358457600080fd5b505afa158015613598573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906135bc9190614554565b9050919050565b60606000826000015483600101546135db9190615204565b67ffffffffffffffff81111561361a577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405190808252806020026020018201604052801561365357816020015b613640614308565b8152602001906001900390816136385790505b5090506000836000015490505b83600101548110156137065783600201600082815260200190815260200160002060405180604001604052908160008201548152602001600182015481525050828560000154836136b19190615204565b815181106136e8577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001018190525080806136fe90615355565b915050613660565b5080915050919050565b600047905090565b600081836137269190615204565b905092915050565b73088800000000000000000000000000000000000273ffffffffffffffffffffffffffffffffffffffff16632e1a7d4d826040518263ffffffff1660e01b815260040161377b9190614f81565b600060405180830381600087803b15801561379557600080fd5b505af11580156137a9573d6000803e3d6000fd5b5050505050565b60006137d8836000018373ffffffffffffffffffffffffffffffffffffffff1660001b613ea9565b905092915050565b600081836137ee9190615123565b905092915050565b606060008367ffffffffffffffff1685600001546138149190615123565b9050846001015481106138a457600067ffffffffffffffff811115613862577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405190808252806020026020018201604052801561389b57816020015b613888614308565b8152602001906001900390816138805790505b50915050613a07565b60008367ffffffffffffffff16826138bc9190615123565b905085600101548111156138d257856001015490505b600082826138e09190615204565b67ffffffffffffffff81111561391f577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405190808252806020026020018201604052801561395857816020015b613945614308565b81526020019060019003908161393d5790505b50905060008390505b828110156139ff57876002016000828152602001908152602001600020604051806040016040529081600082015481526020016001820154815250508285836139aa9190615204565b815181106139e1577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001018190525080806139f790615355565b915050613961565b508093505050505b9392505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60008183613ae091906151aa565b905092915050565b60008183613af69190615179565b905092915050565b6000613b0d836000018361402f565b60001c905092915050565b6000613b2682600001614080565b9050919050565b6000816000015490505b8160010154811015613b7e57816002016000828152602001908152602001600020600080820160009055600182016000905550508080613b7690615355565b915050613b37565b508060010154816000018190555050565b6000613bb7836000018373ffffffffffffffffffffffffffffffffffffffff1660001b614091565b905092915050565b73088800000000000000000000000000000000000573ffffffffffffffffffffffffffffffffffffffff1663f49d0638826040518263ffffffff1660e01b8152600401613c0c9190614fb7565b600060405180830381600087803b158015613c2657600080fd5b505af1158015613c3a573d6000803e3d6000fd5b5050505050565b6000613c72600154613c64613c5585611f5b565b86613ad290919063ffffffff16565b613ae890919063ffffffff16565b905092915050565b73088800000000000000000000000000000000000573ffffffffffffffffffffffffffffffffffffffff1663e335b451888888888888886040518863ffffffff1660e01b8152600401613cd39796959493929190614cbd565b600060405180830381600087803b158015613ced57600080fd5b505af1158015613d01573d6000803e3d6000fd5b5050505050505050505050565b600080600090506000836000015490505b8360010154811015613d895743846002016000838152602001908152602001600020600101541115613d5057613d89565b8360020160008281526020019081526020016000206000015482613d749190615123565b91508080613d8190615355565b915050613d1f565b5080915050919050565b613d9d83836140b4565b613da78382614111565b505050565b613db4614308565b600082600201600084600001548152602001908152602001600020604051806040016040529081600082015481526020016001820154815250509050826002016000846000016000815480929190613e0b90615355565b9190505581526020019081526020016000206000808201600090556001820160009055505080915050919050565b6000613e458383614091565b613e9e578260000182908060018154018082558091505060019003906000526020600020016000909190919091505582600001805490508360010160008481526020019081526020016000208190555060019050613ea3565b600090505b92915050565b60008083600101600084815260200190815260200160002054905060008114614023576000600182613edb9190615204565b9050600060018660000180549050613ef39190615204565b9050818114613fae576000866000018281548110613f3a577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200154905080876000018481548110613f84577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90600052602060002001819055508387600101600083815260200190815260200160002081905550505b85600001805480613fe8577f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b600190038181906000526020600020016000905590558560010160008681526020019081526020016000206000905560019350505050614029565b60009150505b92915050565b600082600001828154811061406d577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200154905092915050565b600081600001805490509050919050565b600080836001016000848152602001908152602001600020541415905092915050565b808260020160008460010160008154809291906140d090615355565b919050558152602001908152602001600020600082015181600001556020820151816001015560408201518160020155606082015181600301559050505050565b60008260000154905060008360010154905060008290505b81811015614173578385600201600083815260200190815260200160002060010154111561415657614173565b61415f8561417a565b50808061416b90615355565b915050614129565b5050505050565b614182614322565b60008260020160008460000154815260200190815260200160002060405180608001604052908160008201548152602001600182015481526020016002820154815260200160038201548152505090508260020160008460000160008154809291906141ed90615355565b919050558152602001908152602001600020600080820160009055600182016000905560028201600090556003820160009055505080915050919050565b828054614237906152f2565b90600052602060002090601f01602090048101928261425957600085556142a0565b82601f1061427257805160ff19168380011785556142a0565b828001600101855582156142a0579182015b8281111561429f578251825591602001919060010190614284565b5b5090506142ad919061434a565b5090565b60405180606001604052806000815260200160008152602001600081525090565b6040518060c001604052806000815260200160008152602001600081526020016000815260200160008152602001600081525090565b604051806040016040528060008152602001600081525090565b6040518060800160405280600081526020016000815260200160008152602001600081525090565b5b8082111561436357600081600090555060010161434b565b5090565b600061437a61437584614ff7565b614fd2565b90508281526020810184848401111561439257600080fd5b61439d8482856152b0565b509392505050565b6000813590506143b48161576d565b92915050565b6000819050826020600202820111156143d257600080fd5b92915050565b6000813590506143e781615784565b92915050565b6000815190506143fc81615784565b92915050565b60008083601f84011261441457600080fd5b8235905067ffffffffffffffff81111561442d57600080fd5b60208301915083600182028301111561444557600080fd5b9250929050565b600082601f83011261445d57600080fd5b813561446d848260208601614367565b91505092915050565b6000813590506144858161579b565b92915050565b60008135905061449a816157b2565b92915050565b6000602082840312156144b257600080fd5b60006144c0848285016143a5565b91505092915050565b600080604083850312156144dc57600080fd5b60006144ea858286016143a5565b92505060206144fb8582860161448b565b9150509250929050565b60008060006060848603121561451a57600080fd5b6000614528868287016143a5565b93505060206145398682870161448b565b925050604061454a8682870161448b565b9150509250925092565b60006020828403121561456657600080fd5b6000614574848285016143ed565b91505092915050565b600080600080600080600060a0888a03121561459857600080fd5b60006145a68a828b016143d8565b97505060206145b78a828b0161448b565b965050604088013567ffffffffffffffff8111156145d457600080fd5b6145e08a828b01614402565b9550955050606088013567ffffffffffffffff8111156145ff57600080fd5b61460b8a828b01614402565b9350935050608088013567ffffffffffffffff81111561462a57600080fd5b6146368a828b016143ba565b91505092959891949750929550565b60006020828403121561465757600080fd5b600082013567ffffffffffffffff81111561467157600080fd5b61467d8482850161444c565b91505092915050565b60006020828403121561469857600080fd5b60006146a684828501614476565b91505092915050565b6000806000606084860312156146c457600080fd5b60006146d286828701614476565b93505060206146e386828701614476565b92505060406146f48682870161448b565b9150509250925092565b60006020828403121561471057600080fd5b600061471e8482850161448b565b91505092915050565b600061473484848461485f565b90509392505050565b60006147498383614b64565b60408301905092915050565b61475e81615238565b82525050565b600061476f82615042565b614779818561507d565b93508360208202850161478b85615028565b8060005b858110156147d15784840389526147a682846150cc565b6147b1868284614727565b95506147bc84615063565b935060208b019a50505060018101905061478f565b50829750879550505050505092915050565b60006147ee8261504d565b6147f88185615088565b935061480383615032565b8060005b8381101561483457815161481b888261473d565b975061482683615070565b925050600181019050614807565b5085935050505092915050565b61484a8161524a565b82525050565b61485981615256565b82525050565b600061486b8385615099565b93506148788385846152b0565b6148818361545a565b840190509392505050565b600061489883856150aa565b93506148a58385846152b0565b6148ae8361545a565b840190509392505050565b60006148c482615058565b6148ce81856150bb565b93506148de8185602086016152bf565b6148e78161545a565b840191505092915050565b60006148ff602a836150bb565b915061490a8261546b565b604082019050919050565b60006149226026836150bb565b915061492d826154ba565b604082019050919050565b60006149456012836150bb565b915061495082615509565b602082019050919050565b6000614968601c836150bb565b915061497382615532565b602082019050919050565b600061498b602e836150bb565b91506149968261555b565b604082019050919050565b60006149ae6014836150bb565b91506149b9826155aa565b602082019050919050565b60006149d16014836150bb565b91506149dc826155d3565b602082019050919050565b60006149f46013836150bb565b91506149ff826155fc565b602082019050919050565b6000614a176020836150bb565b9150614a2282615625565b602082019050919050565b6000614a3a6017836150bb565b9150614a458261564e565b602082019050919050565b6000614a5d6016836150bb565b9150614a6882615677565b602082019050919050565b6000614a806015836150bb565b9150614a8b826156a0565b602082019050919050565b6000614aa36018836150bb565b9150614aae826156c9565b602082019050919050565b6000614ac66015836150bb565b9150614ad1826156f2565b602082019050919050565b6000614ae96013836150bb565b9150614af48261571b565b602082019050919050565b6000614b0c6016836150bb565b9150614b1782615744565b602082019050919050565b606082016000820151614b386000850182614c0e565b506020820151614b4b6020850182614c0e565b506040820151614b5e6040850182614c0e565b50505050565b604082016000820151614b7a6000850182614c0e565b506020820151614b8d6020850182614c0e565b50505050565b60c082016000820151614ba96000850182614c0e565b506020820151614bbc6020850182614c0e565b506040820151614bcf6040850182614c0e565b506060820151614be26060850182614c0e565b506080820151614bf56080850182614c0e565b5060a0820151614c0860a0850182614c0e565b50505050565b614c1781615280565b82525050565b614c2681615280565b82525050565b614c358161529e565b82525050565b614c448161528a565b82525050565b6000602082019050614c5f6000830184614755565b92915050565b60006020820190508181036000830152614c7f81846147e3565b905092915050565b6000602082019050614c9c6000830184614841565b92915050565b6000602082019050614cb76000830184614850565b92915050565b600060a082019050614cd2600083018a614850565b614cdf6020830189614c3b565b8181036040830152614cf281878961488c565b90508181036060830152614d0781858761488c565b90508181036080830152614d1b8184614764565b905098975050505050505050565b60006020820190508181036000830152614d4381846148b9565b905092915050565b60006020820190508181036000830152614d64816148f2565b9050919050565b60006020820190508181036000830152614d8481614915565b9050919050565b60006020820190508181036000830152614da481614938565b9050919050565b60006020820190508181036000830152614dc48161495b565b9050919050565b60006020820190508181036000830152614de48161497e565b9050919050565b60006020820190508181036000830152614e04816149a1565b9050919050565b60006020820190508181036000830152614e24816149c4565b9050919050565b60006020820190508181036000830152614e44816149e7565b9050919050565b60006020820190508181036000830152614e6481614a0a565b9050919050565b60006020820190508181036000830152614e8481614a2d565b9050919050565b60006020820190508181036000830152614ea481614a50565b9050919050565b60006020820190508181036000830152614ec481614a73565b9050919050565b60006020820190508181036000830152614ee481614a96565b9050919050565b60006020820190508181036000830152614f0481614ab9565b9050919050565b60006020820190508181036000830152614f2481614adc565b9050919050565b60006020820190508181036000830152614f4481614aff565b9050919050565b6000606082019050614f606000830184614b22565b92915050565b600060c082019050614f7b6000830184614b93565b92915050565b6000602082019050614f966000830184614c1d565b92915050565b6000602082019050614fb16000830184614c2c565b92915050565b6000602082019050614fcc6000830184614c3b565b92915050565b6000614fdc614fed565b9050614fe88282615324565b919050565b6000604051905090565b600067ffffffffffffffff8211156150125761501161542b565b5b61501b8261545a565b9050602081019050919050565b6000819050919050565b6000819050602082019050919050565b600060029050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b6000602082019050919050565b600081905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600080833560016020038436030381126150e557600080fd5b83810192508235915060208301925067ffffffffffffffff82111561510957600080fd5b60018202360384131561511b57600080fd5b509250929050565b600061512e82615280565b915061513983615280565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561516e5761516d61539e565b5b828201905092915050565b600061518482615280565b915061518f83615280565b92508261519f5761519e6153cd565b5b828204905092915050565b60006151b582615280565b91506151c083615280565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156151f9576151f861539e565b5b828202905092915050565b600061520f82615280565b915061521a83615280565b92508282101561522d5761522c61539e565b5b828203905092915050565b600061524382615260565b9050919050565b60008115159050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600067ffffffffffffffff82169050919050565b60006152a98261528a565b9050919050565b82818337600083830152505050565b60005b838110156152dd5780820151818401526020810190506152c2565b838111156152ec576000848401525b50505050565b6000600282049050600182168061530a57607f821691505b6020821081141561531e5761531d6153fc565b5b50919050565b61532d8261545a565b810181811067ffffffffffffffff8211171561534c5761534b61542b565b5b80604052505050565b600061536082615280565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156153935761539261539e565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f6d73672e76616c75652073686f756c6420626520766f7465506f776572202a2060008201527f3130303020657468657200000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f42616c616e6365206e6f7420656e6f7567680000000000000000000000000000600082015250565b7f6d73672e76616c75652073686f756c6420626520313030302043465800000000600082015250565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b7f506f6f6c206973206e6f74207265676973746564000000000000000000000000600082015250565b7f4c6f636b6564206973206e6f7420656e6f756768000000000000000000000000600082015250565b7f4e6f7420656e6f75676820696e74657265737400000000000000000000000000600082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f726174696f2073686f756c6420626520312d3130303030000000000000000000600082015250565b7f4d696e696d616c20766f7465506f776572206973203100000000000000000000600082015250565b7f4e6f20636c61696d61626c6520696e7465726573740000000000000000000000600082015250565b7f506f6f6c20697320616c72656164792072656769737465640000000000000000600082015250565b7f766f7465506f7765722073686f756c6420626520310000000000000000000000600082015250565b7f496e746572657374206e6f7420656e6f75676800000000000000000000000000600082015250565b7f556e6c6f636b6564206973206e6f7420656e6f75676800000000000000000000600082015250565b61577681615238565b811461578157600080fd5b50565b61578d81615256565b811461579857600080fd5b50565b6157a481615280565b81146157af57600080fd5b50565b6157bb8161528a565b81146157c657600080fd5b5056fea2646970667358221220b05628409c9d951bc1a0e355438054bb4172280c857129e5a38d6c1918a0d99564736f6c63430008040033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}
