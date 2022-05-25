module.exports = {
  "_format": "hh-sol-artifact-1",
  "contractName": "ESpacePoSPool",
  "sourceName": "contracts/eSpace/eSpacePoSPool.sol",
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
      "stateMutability": "payable",
      "type": "fallback"
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
      "inputs": [],
      "name": "_userShareRatio",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "pure",
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
      "inputs": [],
      "name": "birdgeAddrSetted",
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
      "inputs": [],
      "name": "crossingVotes",
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
      "inputs": [],
      "name": "firstUnstakeVotes",
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
          "name": "votePower",
          "type": "uint256"
        }
      ],
      "name": "handleCrossingVotes",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "votePower",
          "type": "uint256"
        }
      ],
      "name": "handleUnlockedIncrease",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "handleUnstakeTask",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
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
          "internalType": "struct ESpacePoSPool.PoolSummary",
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
      "name": "receiveInterest",
      "outputs": [],
      "stateMutability": "payable",
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
          "internalType": "address",
          "name": "bridgeAddress",
          "type": "address"
        }
      ],
      "name": "setBridge",
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
          "internalType": "uint256",
          "name": "apy",
          "type": "uint256"
        }
      ],
      "name": "setPoolAPY",
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
      "inputs": [],
      "name": "unstakeLen",
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
          "internalType": "struct ESpacePoSPool.UserSummary",
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
    },
    {
      "inputs": [],
      "name": "withdrawableCfx",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x60806040526103e8600155683635c9adc5dea00000600255612580600455610708600762015180620000329190620001a3565b6200003e919062000146565b60055560006007553480156200005357600080fd5b5062000074620000686200007a60201b60201c565b6200008260201b60201c565b6200023d565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000620001538262000204565b9150620001608362000204565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156200019857620001976200020e565b5b828201905092915050565b6000620001b08262000204565b9150620001bd8362000204565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615620001f957620001f86200020e565b5b828202905092915050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b614cb2806200024d6000396000f3fe60806040526004361061024a5760003560e01c806382df7a3b11610139578063beb99c1e116100b6578063e3d5b2331161007a578063e3d5b2331461080b578063e5e20ccf14610848578063ed1c2a7b14610871578063f2fde38b1461089a578063f3466dfa146108c3578063f660776b146108ee5761024b565b8063beb99c1e14610714578063c3b8eba01461073d578063c7ff5d6e14610766578063d68076c314610791578063e2af7928146107ce5761024b565b806396b6b59d116100fd57806396b6b59d1461062f5780639aafd5b814610658578063a669800214610683578063b4064a25146106c0578063bb61be5f146106eb5761024b565b806382df7a3b1461054857806384981986146105735780638da5cb5b1461059e5780638dd14802146105c957806394067045146105f25761024b565b8063336f8e0e116101c7578063715018a61161018b578063715018a6146104af57806372b65424146104c65780637571fcf6146104ef5780638129fc1c1461051a5780638270512f146105315761024b565b8063336f8e0e146103e75780634337e4bf1461042457806348f1520a1461042e5780636283c50b1461045957806367a1aa4f146104845761024b565b806317f788711161020e57806317f78871146103135780631bc1e78a1461032f57806324a3bbe2146103585780632ce7777f146103955780632eb375ea146103be5761024b565b806301cfc7f81461024d578063075fc1331461027657806309fcd230146102a157806309fecf7f146102cc57806315cc421d146102e85761024b565b5b005b34801561025957600080fd5b50610274600480360381019061026f9190613df5565b610919565b005b34801561028257600080fd5b5061028b6109b3565b6040516102989190614519565b60405180910390f35b3480156102ad57600080fd5b506102b66109b9565b6040516102c39190614519565b60405180910390f35b6102e660048036038101906102e19190613e6d565b6109fb565b005b3480156102f457600080fd5b506102fd610e18565b60405161030a9190614519565b60405180910390f35b61032d60048036038101906103289190613df5565b610e1e565b005b34801561033b57600080fd5b5061035660048036038101906103519190613df5565b610f21565b005b34801561036457600080fd5b5061037f600480360381019061037a9190613d00565b611012565b60405161038c91906142a4565b60405180910390f35b3480156103a157600080fd5b506103bc60048036038101906103b79190613e6d565b611062565b005b3480156103ca57600080fd5b506103e560048036038101906103e09190613df5565b611427565b005b3480156103f357600080fd5b5061040e60048036038101906104099190613d65565b6116bd565b60405161041b91906142a4565b60405180910390f35b61042c61171b565b005b34801561043a57600080fd5b506104436117ad565b6040516104509190614519565b60405180910390f35b34801561046557600080fd5b5061046e6117b7565b60405161047b91906142c6565b60405180910390f35b34801561049057600080fd5b506104996117ca565b6040516104a69190614519565b60405180910390f35b3480156104bb57600080fd5b506104c46117d0565b005b3480156104d257600080fd5b506104ed60048036038101906104e89190613db4565b611858565b005b3480156104fb57600080fd5b506105046118ee565b60405161051191906144e3565b60405180910390f35b34801561052657600080fd5b5061052f611970565b005b34801561053d57600080fd5b50610546611a91565b005b34801561055457600080fd5b5061055d611b3c565b60405161056a9190614519565b60405180910390f35b34801561057f57600080fd5b50610588611b46565b6040516105959190614519565b60405180910390f35b3480156105aa57600080fd5b506105b3611bf1565b6040516105c09190614289565b60405180910390f35b3480156105d557600080fd5b506105f060048036038101906105eb9190613d00565b611c1a565b005b3480156105fe57600080fd5b5061061960048036038101906106149190613df5565b611cf5565b6040516106269190614289565b60405180910390f35b34801561063b57600080fd5b5061065660048036038101906106519190613df5565b611d12565b005b34801561066457600080fd5b5061066d611db2565b60405161067a9190614519565b60405180910390f35b34801561068f57600080fd5b506106aa60048036038101906106a59190613d65565b611dc3565b6040516106b791906142a4565b60405180910390f35b3480156106cc57600080fd5b506106d5611e21565b6040516106e29190614519565b60405180910390f35b3480156106f757600080fd5b50610712600480360381019061070d9190613d29565b611e27565b005b34801561072057600080fd5b5061073b60048036038101906107369190613e6d565b612073565b005b34801561074957600080fd5b50610764600480360381019061075f9190613e6d565b61249d565b005b34801561077257600080fd5b5061077b6125c9565b6040516107889190614519565b60405180910390f35b34801561079d57600080fd5b506107b860048036038101906107b39190613d00565b6125e6565b6040516107c59190614519565b60405180910390f35b3480156107da57600080fd5b506107f560048036038101906107f09190613d00565b61278b565b60405161080291906142a4565b60405180910390f35b34801561081757600080fd5b50610832600480360381019061082d9190613d00565b6127db565b60405161083f91906144fe565b60405180910390f35b34801561085457600080fd5b5061086f600480360381019061086a9190613e6d565b612934565b005b34801561087d57600080fd5b5061089860048036038101906108939190613e1e565b6129c4565b005b3480156108a657600080fd5b506108c160048036038101906108bc9190613d00565b612ad0565b005b3480156108cf57600080fd5b506108d8612bc8565b6040516108e591906142e1565b60405180910390f35b3480156108fa57600080fd5b50610903612c56565b6040516109109190614519565b60405180910390f35b600360019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146109a9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109a090614463565b60405180910390fd5b8060078190555050565b60185481565b600060156000015460156001015414156109d657600090506109f8565b6015600201600060156000015481526020019081526020016000206000015490505b90565b600360009054906101000a900460ff16610a4a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a4190614363565b60405180910390fd5b60008167ffffffffffffffff1611610a97576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a8e90614423565b60405180910390fd5b6002548167ffffffffffffffff16610aaf9190614681565b3414610af0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ae790614323565b60405180910390fd5b6000600360019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f19350505050158015610b5d573d6000803e3d6000fd5b508167ffffffffffffffff1660196000828254610b7a91906145fa565b925050819055503373ffffffffffffffffffffffffffffffffffffffff167ff5ebfcde71acb15a758233f0c9ab25632209399b90a9209a4f2379ec5fcee89f83604051610bc79190614534565b60405180910390a2610bd7612c5c565b610be033612d08565b610c6360405180604001604052808467ffffffffffffffff168152602001600554610c09612eb1565b610c1391906145fa565b815250600d60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020612eb990919063ffffffff16565b610caa600d60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020612f02565b600c60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206002016000828254610cfb91906145fa565b925050819055508167ffffffffffffffff16600c60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000016000828254610d5e91906145fa565b925050819055508167ffffffffffffffff16600c60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001016000828254610dc191906145fa565b92505081905550610dd133612f91565b8167ffffffffffffffff1660096000016000828254610df091906145fa565b92505081905550610dff6130b4565b610e133360136130e790919063ffffffff16565b505050565b60195481565b600360019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610eae576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ea590614463565b60405180910390fd5b60025481610ebc9190614681565b3414610efd576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ef490614323565b60405180910390fd5b3460186000828254610f0f91906145fa565b92505081905550610f1e6130b4565b50565b600360019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610fb1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fa890614463565b60405180910390fd5b806019541015610ff6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fed90614483565b60405180910390fd5b806019600082825461100891906146db565b9250508190555050565b606061105b600e60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020613117565b9050919050565b600360009054906101000a900460ff166110b1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110a890614363565b60405180910390fd5b6110f8600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020612f02565b600c60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600301600082825461114991906145fa565b925050819055508067ffffffffffffffff16600c60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206003015410156111df576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111d6906144c3565b60405180910390fd5b60006002548267ffffffffffffffff166111f99190614681565b9050806018541015611240576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161123790614383565b60405180910390fd5b806018600082825461125291906146db565b925050819055508167ffffffffffffffff16600c60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160008282546112b591906146db565b925050819055508167ffffffffffffffff16600c60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001600082825461131891906146db565b9250508190555060003390508073ffffffffffffffffffffffffffffffffffffffff166108fc839081150290604051600060405180830381858888f1935050505015801561136a573d6000803e3d6000fd5b503373ffffffffffffffffffffffffffffffffffffffff167f141ef67c4a6d3ec2adfb2f66d33c2b11de5b4f34344757554d430570b18a92ec846040516113b19190614534565b60405180910390a26113c16130b4565b6000600c60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000015414156114225761142033601361326490919063ffffffff16565b505b505050565b600360009054906101000a900460ff16611476576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161146d90614363565b60405180910390fd5b6000611481336125e6565b9050818110156114c6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114bd906144a3565b60405180910390fd5b6114ce612c5c565b6114d733612d08565b61152c82600c60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206004015461329490919063ffffffff16565b600c60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600401819055506115c782600c60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600501546132aa90919063ffffffff16565b600c60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206005018190555061161633612f91565b60003390508073ffffffffffffffffffffffffffffffffffffffff166108fc849081150290604051600060405180830381858888f19350505050158015611661573d6000803e3d6000fd5b503373ffffffffffffffffffffffffffffffffffffffff167fbbf701f67a7d285bbd2b9b2dc7a5fee474e6dc3c059183385da6cc9de2be34a9846040516116a89190614519565b60405180910390a26116b86130b4565b505050565b60606117128383600e60008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206132c09092919063ffffffff16565b90509392505050565b600360019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146117ab576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117a290614463565b60405180910390fd5b565b6000612710905090565b600360009054906101000a900460ff1681565b60045481565b6117d86134d8565b73ffffffffffffffffffffffffffffffffffffffff166117f6611bf1565b73ffffffffffffffffffffffffffffffffffffffff161461184c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611843906143e3565b60405180910390fd5b61185660006134e0565b565b6118606134d8565b73ffffffffffffffffffffffffffffffffffffffff1661187e611bf1565b73ffffffffffffffffffffffffffffffffffffffff16146118d4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118cb906143e3565b60405180910390fd5b80600690805190602001906118ea929190613b32565b5050565b6118f6613bb8565b60006009604051806060016040529081600082015481526020016001820154815260200160028201548152505090506000611946600f600101546119386135a4565b6132aa90919063ffffffff16565b905061195f81836040015161329490919063ffffffff16565b826040018181525050819250505090565b600060159054906101000a900460ff16806119985750600060149054906101000a900460ff16155b6119d7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119ce906143a3565b60405180910390fd5b60008060159054906101000a900460ff161590508015611a28576001600060156101000a81548160ff0219169083151502179055506001600060146101000a81548160ff0219169083151502179055505b6103e8600181905550683635c9adc5dea00000600281905550610e10600762015180611a549190614681565b611a5e91906145fa565b6005819055506125806004819055508015611a8e5760008060156101000a81548160ff0219169083151502179055505b50565b600360009054906101000a900460ff16611ae0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ad790614363565b60405180910390fd5b6000611aeb336125e6565b905060008111611b30576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b2790614443565b60405180910390fd5b611b3981611427565b50565b6000600754905090565b6000600360019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611bd8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611bcf90614463565b60405180910390fd5b6000611be460156135ac565b9050806000015191505090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b611c226134d8565b73ffffffffffffffffffffffffffffffffffffffff16611c40611bf1565b73ffffffffffffffffffffffffffffffffffffffff1614611c96576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c8d906143e3565b60405180910390fd5b80600360016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600360006101000a81548160ff02191690831515021790555050565b6000611d0b82601361367190919063ffffffff16565b9050919050565b611d1a6134d8565b73ffffffffffffffffffffffffffffffffffffffff16611d38611bf1565b73ffffffffffffffffffffffffffffffffffffffff1614611d8e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d85906143e3565b60405180910390fd5b80600181905550670de0b6b3a764000081611da99190614681565b60028190555050565b6000611dbe601361368b565b905090565b6060611e188383600d60008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206132c09092919063ffffffff16565b90509392505050565b60055481565b611e2f6134d8565b73ffffffffffffffffffffffffffffffffffffffff16611e4d611bf1565b73ffffffffffffffffffffffffffffffffffffffff1614611ea3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611e9a906143e3565b60405180910390fd5b6000600c60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001015490506000811415611ef9575061206f565b611f0283612d08565b6000600c60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101819055506000600c60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020181905550611fd9600d60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206136a0565b61204860405180604001604052808381526020018467ffffffffffffffff16815250600e60008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020612eb990919063ffffffff16565b61205183612f91565b806009600001600082825461206691906146db565b92505081905550505b5050565b600360009054906101000a900460ff166120c2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016120b990614363565b60405180910390fd5b612109600d60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020612f02565b600c60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201600082825461215a91906145fa565b925050819055508067ffffffffffffffff16600c60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206002015410156121f0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016121e7906143c3565b60405180910390fd5b61221c60405180602001604052808367ffffffffffffffff16815250601561370290919063ffffffff16565b3373ffffffffffffffffffffffffffffffffffffffff167fd81524ca5b038be9f98b286808a6f46f99c8700bce9ab4793dc12a2dbaa4f2d8826040516122629190614534565b60405180910390a2612272612c5c565b61227b33612d08565b6122fe60405180604001604052808367ffffffffffffffff1681526020016005546122a4612eb1565b6122ae91906145fa565b815250600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020612eb990919063ffffffff16565b612345600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020612f02565b600c60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600301600082825461239691906145fa565b925050819055508067ffffffffffffffff16600c60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160008282546123f991906146db565b925050819055508067ffffffffffffffff16600c60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201600082825461245c91906146db565b9250508190555061246c33612f91565b8067ffffffffffffffff166009600001600082825461248b91906146db565b9250508190555061249a6130b4565b50565b6124a56134d8565b73ffffffffffffffffffffffffffffffffffffffff166124c3611bf1565b73ffffffffffffffffffffffffffffffffffffffff1614612519576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612510906143e3565b60405180910390fd5b60008167ffffffffffffffff1611801561253f57506127108167ffffffffffffffff1611155b61257e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161257590614403565b60405180910390fd5b8067ffffffffffffffff166004819055507fe200219383a2dbe79fad4e1549a81b6057429299f33583641c5fdddcdc0b3797816040516125be9190614534565b60405180910390a150565b60006015600001546015600101546125e191906146db565b905090565b600080600c60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600501549050600060085490506000600f600101546126456135a4565b61264f91906146db565b90506000601260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060405180606001604052908160008201548152602001600182015481526020016002820154815250509050600082111561270d5760006126f46126e5600154600f6000015461374190919063ffffffff16565b8461375790919063ffffffff16565b9050612709818561329490919063ffffffff16565b9350505b60008160000151111561277f57600061275d612738600154846000015161374190919063ffffffff16565b61274f8460200151876132aa90919063ffffffff16565b61374190919063ffffffff16565b905061277b61276c828961376d565b8661329490919063ffffffff16565b9450505b83945050505050919050565b60606127d4600d60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020613117565b9050919050565b6127e3613bd9565b6000600c60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060c0016040529081600082015481526020016001820154815260200160028201548152602001600382015481526020016004820154815260200160058201548152505090506128b4600d60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206137a5565b816040018181516128c591906145fa565b91508181525050612913600e60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206137a5565b8160600181815161292491906145fa565b9150818152505080915050919050565b61293c6134d8565b73ffffffffffffffffffffffffffffffffffffffff1661295a611bf1565b73ffffffffffffffffffffffffffffffffffffffff16146129b0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016129a7906143e3565b60405180910390fd5b8067ffffffffffffffff1660058190555050565b6129cc6134d8565b73ffffffffffffffffffffffffffffffffffffffff166129ea611bf1565b73ffffffffffffffffffffffffffffffffffffffff1614612a40576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612a37906143e3565b60405180910390fd5b6000612a4c601361368b565b90506000811415612a5d5750612acb565b612a65612c5c565b60008385612a7391906145fa565b905081811115612a81578190505b60008590505b81811015612abf57612aac612aa682601361367190919063ffffffff16565b85611e27565b8080612ab790614822565b915050612a87565b50612ac86130b4565b50505b505050565b612ad86134d8565b73ffffffffffffffffffffffffffffffffffffffff16612af6611bf1565b73ffffffffffffffffffffffffffffffffffffffff1614612b4c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612b43906143e3565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415612bbc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612bb390614343565b60405180910390fd5b612bc5816134e0565b50565b60068054612bd5906147bf565b80601f0160208091040260200160405190810160405280929190818152602001828054612c01906147bf565b8015612c4e5780601f10612c2357610100808354040283529160200191612c4e565b820191906000526020600020905b815481529060010190602001808311612c3157829003601f168201915b505050505081565b60085481565b6000600f60010154612c6c6135a4565b612c7691906146db565b90506000811480612c8c57506000600f60000154145b15612c975750612d06565b6000612cb3600154600f6000015461374190919063ffffffff16565b9050612cdc612ccb828461375790919063ffffffff16565b60085461329490919063ffffffff16565b600881905550612cfa8260096002015461329490919063ffffffff16565b60096002018190555050505b565b6000601260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060405180606001604052908160008201548152602001600182015481526020016002820154815250509050600081600001511415612d875750612eae565b6000612dcc612da5600154846000015161374190919063ffffffff16565b612dbe84602001516008546132aa90919063ffffffff16565b61374190919063ffffffff16565b90506000612dda828561376d565b9050612e3181600c60008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206005015461329490919063ffffffff16565b600c60008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060050181905550612ea1612e8d82846132aa90919063ffffffff16565b60096001015461329490919063ffffffff16565b6009600101819055505050505b50565b600043905090565b80826002016000846001016000815480929190612ed590614822565b91905055815260200190815260200160002060008201518160000155602082015181600101559050505050565b600080600090506000836000015490505b8360010154811015612f875743846002016000838152602001908152602001600020600101541115612f4457612f87565b8360020160008281526020019081526020016000206000015482612f6891906145fa565b9150612f738461382a565b508080612f7f90614822565b915050612f13565b5080915050919050565b600c60008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010154601260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000181905550600854601260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001018190555061306b612eb1565b601260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206002018190555050565b600960000154600f600001819055506130cb6135a4565b600f600101819055506130dc612eb1565b600f60020181905550565b600061310f836000018373ffffffffffffffffffffffffffffffffffffffff1660001b6138b7565b905092915050565b606060008260000154836001015461312f91906146db565b67ffffffffffffffff81111561316e577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280602002602001820160405280156131a757816020015b613194613c0f565b81526020019060019003908161318c5790505b5090506000836000015490505b836001015481101561325a57836002016000828152602001908152602001600020604051806040016040529081600082015481526020016001820154815250508285600001548361320591906146db565b8151811061323c577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010181905250808061325290614822565b9150506131b4565b5080915050919050565b600061328c836000018373ffffffffffffffffffffffffffffffffffffffff1660001b613927565b905092915050565b600081836132a291906145fa565b905092915050565b600081836132b891906146db565b905092915050565b606060008367ffffffffffffffff1685600001546132de91906145fa565b90508460010154811061336e57600067ffffffffffffffff81111561332c577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405190808252806020026020018201604052801561336557816020015b613352613c0f565b81526020019060019003908161334a5790505b509150506134d1565b60008367ffffffffffffffff168261338691906145fa565b9050856001015481111561339c57856001015490505b600082826133aa91906146db565b67ffffffffffffffff8111156133e9577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405190808252806020026020018201604052801561342257816020015b61340f613c0f565b8152602001906001900390816134075790505b50905060008390505b828110156134c9578760020160008281526020019081526020016000206040518060400160405290816000820154815260200160018201548152505082858361347491906146db565b815181106134ab577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001018190525080806134c190614822565b91505061342b565b508093505050505b9392505050565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600047905090565b6135b4613c29565b81600101548260000154106135fe576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016135f590614303565b60405180910390fd5b600082600201600084600001548152602001908152602001600020604051806020016040529081600082015481525050905082600201600084600001600081548092919061364b90614822565b919050558152602001908152602001600020600080820160009055505080915050919050565b60006136808360000183613aad565b60001c905092915050565b600061369982600001613afe565b9050919050565b6000816000015490505b81600101548110156136f1578160020160008281526020019081526020016000206000808201600090556001820160009055505080806136e990614822565b9150506136aa565b508060010154816000018190555050565b8082600201600084600101600081548092919061371e90614822565b919050558152602001908152602001600020600082015181600001559050505050565b6000818361374f9190614681565b905092915050565b600081836137659190614650565b905092915050565b600061379d61271061378f6137806117ad565b8661374190919063ffffffff16565b61375790919063ffffffff16565b905092915050565b600080600090506000836000015490505b836001015481101561382057438460020160008381526020019081526020016000206001015411156137e757613820565b836002016000828152602001908152602001600020600001548261380b91906145fa565b9150808061381890614822565b9150506137b6565b5080915050919050565b613832613c0f565b60008260020160008460000154815260200190815260200160002060405180604001604052908160008201548152602001600182015481525050905082600201600084600001600081548092919061388990614822565b9190505581526020019081526020016000206000808201600090556001820160009055505080915050919050565b60006138c38383613b0f565b61391c578260000182908060018154018082558091505060019003906000526020600020016000909190919091505582600001805490508360010160008481526020019081526020016000208190555060019050613921565b600090505b92915050565b60008083600101600084815260200190815260200160002054905060008114613aa157600060018261395991906146db565b905060006001866000018054905061397191906146db565b9050818114613a2c5760008660000182815481106139b8577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200154905080876000018481548110613a02577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90600052602060002001819055508387600101600083815260200190815260200160002081905550505b85600001805480613a66577f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b600190038181906000526020600020016000905590558560010160008681526020019081526020016000206000905560019350505050613aa7565b60009150505b92915050565b6000826000018281548110613aeb577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200154905092915050565b600081600001805490509050919050565b600080836001016000848152602001908152602001600020541415905092915050565b828054613b3e906147bf565b90600052602060002090601f016020900481019282613b605760008555613ba7565b82601f10613b7957805160ff1916838001178555613ba7565b82800160010185558215613ba7579182015b82811115613ba6578251825591602001919060010190613b8b565b5b509050613bb49190613c3c565b5090565b60405180606001604052806000815260200160008152602001600081525090565b6040518060c001604052806000815260200160008152602001600081526020016000815260200160008152602001600081525090565b604051806040016040528060008152602001600081525090565b6040518060200160405280600081525090565b5b80821115613c55576000816000905550600101613c3d565b5090565b6000613c6c613c6784614574565b61454f565b905082815260208101848484011115613c8457600080fd5b613c8f84828561477d565b509392505050565b600081359050613ca681614c37565b92915050565b600082601f830112613cbd57600080fd5b8135613ccd848260208601613c59565b91505092915050565b600081359050613ce581614c4e565b92915050565b600081359050613cfa81614c65565b92915050565b600060208284031215613d1257600080fd5b6000613d2084828501613c97565b91505092915050565b60008060408385031215613d3c57600080fd5b6000613d4a85828601613c97565b9250506020613d5b85828601613ceb565b9150509250929050565b600080600060608486031215613d7a57600080fd5b6000613d8886828701613c97565b9350506020613d9986828701613ceb565b9250506040613daa86828701613ceb565b9150509250925092565b600060208284031215613dc657600080fd5b600082013567ffffffffffffffff811115613de057600080fd5b613dec84828501613cac565b91505092915050565b600060208284031215613e0757600080fd5b6000613e1584828501613cd6565b91505092915050565b600080600060608486031215613e3357600080fd5b6000613e4186828701613cd6565b9350506020613e5286828701613cd6565b9250506040613e6386828701613ceb565b9150509250925092565b600060208284031215613e7f57600080fd5b6000613e8d84828501613ceb565b91505092915050565b6000613ea283836141b2565b60408301905092915050565b613eb78161470f565b82525050565b6000613ec8826145b5565b613ed281856145d8565b9350613edd836145a5565b8060005b83811015613f0e578151613ef58882613e96565b9750613f00836145cb565b925050600181019050613ee1565b5085935050505092915050565b613f2481614721565b82525050565b6000613f35826145c0565b613f3f81856145e9565b9350613f4f81856020860161478c565b613f5881614927565b840191505092915050565b6000613f70600e836145e9565b9150613f7b82614938565b602082019050919050565b6000613f93602a836145e9565b9150613f9e82614961565b604082019050919050565b6000613fb66026836145e9565b9150613fc1826149b0565b604082019050919050565b6000613fd96012836145e9565b9150613fe4826149ff565b602082019050919050565b6000613ffc601e836145e9565b915061400782614a28565b602082019050919050565b600061401f602e836145e9565b915061402a82614a51565b604082019050919050565b60006140426014836145e9565b915061404d82614aa0565b602082019050919050565b60006140656020836145e9565b915061407082614ac9565b602082019050919050565b60006140886017836145e9565b915061409382614af2565b602082019050919050565b60006140ab6016836145e9565b91506140b682614b1b565b602082019050919050565b60006140ce6015836145e9565b91506140d982614b44565b602082019050919050565b60006140f16016836145e9565b91506140fc82614b6d565b602082019050919050565b6000614114602e836145e9565b915061411f82614b96565b604082019050919050565b60006141376013836145e9565b915061414282614be5565b602082019050919050565b600061415a6016836145e9565b915061416582614c0e565b602082019050919050565b606082016000820151614186600085018261425c565b506020820151614199602085018261425c565b5060408201516141ac604085018261425c565b50505050565b6040820160008201516141c8600085018261425c565b5060208201516141db602085018261425c565b50505050565b60c0820160008201516141f7600085018261425c565b50602082015161420a602085018261425c565b50604082015161421d604085018261425c565b506060820151614230606085018261425c565b506080820151614243608085018261425c565b5060a082015161425660a085018261425c565b50505050565b6142658161474d565b82525050565b6142748161474d565b82525050565b6142838161476b565b82525050565b600060208201905061429e6000830184613eae565b92915050565b600060208201905081810360008301526142be8184613ebd565b905092915050565b60006020820190506142db6000830184613f1b565b92915050565b600060208201905081810360008301526142fb8184613f2a565b905092915050565b6000602082019050818103600083015261431c81613f63565b9050919050565b6000602082019050818103600083015261433c81613f86565b9050919050565b6000602082019050818103600083015261435c81613fa9565b9050919050565b6000602082019050818103600083015261437c81613fcc565b9050919050565b6000602082019050818103600083015261439c81613fef565b9050919050565b600060208201905081810360008301526143bc81614012565b9050919050565b600060208201905081810360008301526143dc81614035565b9050919050565b600060208201905081810360008301526143fc81614058565b9050919050565b6000602082019050818103600083015261441c8161407b565b9050919050565b6000602082019050818103600083015261443c8161409e565b9050919050565b6000602082019050818103600083015261445c816140c1565b9050919050565b6000602082019050818103600083015261447c816140e4565b9050919050565b6000602082019050818103600083015261449c81614107565b9050919050565b600060208201905081810360008301526144bc8161412a565b9050919050565b600060208201905081810360008301526144dc8161414d565b9050919050565b60006060820190506144f86000830184614170565b92915050565b600060c08201905061451360008301846141e1565b92915050565b600060208201905061452e600083018461426b565b92915050565b6000602082019050614549600083018461427a565b92915050565b600061455961456a565b905061456582826147f1565b919050565b6000604051905090565b600067ffffffffffffffff82111561458f5761458e6148f8565b5b61459882614927565b9050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b60006146058261474d565b91506146108361474d565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156146455761464461486b565b5b828201905092915050565b600061465b8261474d565b91506146668361474d565b9250826146765761467561489a565b5b828204905092915050565b600061468c8261474d565b91506146978361474d565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156146d0576146cf61486b565b5b828202905092915050565b60006146e68261474d565b91506146f18361474d565b9250828210156147045761470361486b565b5b828203905092915050565b600061471a8261472d565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600067ffffffffffffffff82169050919050565b600061477682614757565b9050919050565b82818337600083830152505050565b60005b838110156147aa57808201518184015260208101905061478f565b838111156147b9576000848401525b50505050565b600060028204905060018216806147d757607f821691505b602082108114156147eb576147ea6148c9565b5b50919050565b6147fa82614927565b810181811067ffffffffffffffff82111715614819576148186148f8565b5b80604052505050565b600061482d8261474d565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156148605761485f61486b565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f517565756520697320656d707479000000000000000000000000000000000000600082015250565b7f6d73672e76616c75652073686f756c6420626520766f7465506f776572202a2060008201527f3130303020657468657200000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f506f6f6c206973206e6f74207365747465640000000000000000000000000000600082015250565b7f576974686472617761626c6520434658206973206e6f7420656e6f7567680000600082015250565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b7f4c6f636b6564206973206e6f7420656e6f756768000000000000000000000000600082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f726174696f2073686f756c6420626520312d3130303030000000000000000000600082015250565b7f4d696e696d616c20766f7465506f776572206973203100000000000000000000600082015250565b7f4e6f20636c61696d61626c6520696e7465726573740000000000000000000000600082015250565b7f4f6e6c792062726964676520697320616c6c6f77656400000000000000000000600082015250565b7f63726f7373696e67566f7465732073686f756c6420626520677265617465722060008201527f7468616e20766f7465506f776572000000000000000000000000000000000000602082015250565b7f496e746572657374206e6f7420656e6f75676800000000000000000000000000600082015250565b7f556e6c6f636b6564206973206e6f7420656e6f75676800000000000000000000600082015250565b614c408161470f565b8114614c4b57600080fd5b50565b614c578161474d565b8114614c6257600080fd5b50565b614c6e81614757565b8114614c7957600080fd5b5056fea2646970667358221220cfca631dfe41114ee790047b45ec8fd1925e954920f11de5887341cfbc101ec764736f6c63430008040033",
  "deployedBytecode": "0x60806040526004361061024a5760003560e01c806382df7a3b11610139578063beb99c1e116100b6578063e3d5b2331161007a578063e3d5b2331461080b578063e5e20ccf14610848578063ed1c2a7b14610871578063f2fde38b1461089a578063f3466dfa146108c3578063f660776b146108ee5761024b565b8063beb99c1e14610714578063c3b8eba01461073d578063c7ff5d6e14610766578063d68076c314610791578063e2af7928146107ce5761024b565b806396b6b59d116100fd57806396b6b59d1461062f5780639aafd5b814610658578063a669800214610683578063b4064a25146106c0578063bb61be5f146106eb5761024b565b806382df7a3b1461054857806384981986146105735780638da5cb5b1461059e5780638dd14802146105c957806394067045146105f25761024b565b8063336f8e0e116101c7578063715018a61161018b578063715018a6146104af57806372b65424146104c65780637571fcf6146104ef5780638129fc1c1461051a5780638270512f146105315761024b565b8063336f8e0e146103e75780634337e4bf1461042457806348f1520a1461042e5780636283c50b1461045957806367a1aa4f146104845761024b565b806317f788711161020e57806317f78871146103135780631bc1e78a1461032f57806324a3bbe2146103585780632ce7777f146103955780632eb375ea146103be5761024b565b806301cfc7f81461024d578063075fc1331461027657806309fcd230146102a157806309fecf7f146102cc57806315cc421d146102e85761024b565b5b005b34801561025957600080fd5b50610274600480360381019061026f9190613df5565b610919565b005b34801561028257600080fd5b5061028b6109b3565b6040516102989190614519565b60405180910390f35b3480156102ad57600080fd5b506102b66109b9565b6040516102c39190614519565b60405180910390f35b6102e660048036038101906102e19190613e6d565b6109fb565b005b3480156102f457600080fd5b506102fd610e18565b60405161030a9190614519565b60405180910390f35b61032d60048036038101906103289190613df5565b610e1e565b005b34801561033b57600080fd5b5061035660048036038101906103519190613df5565b610f21565b005b34801561036457600080fd5b5061037f600480360381019061037a9190613d00565b611012565b60405161038c91906142a4565b60405180910390f35b3480156103a157600080fd5b506103bc60048036038101906103b79190613e6d565b611062565b005b3480156103ca57600080fd5b506103e560048036038101906103e09190613df5565b611427565b005b3480156103f357600080fd5b5061040e60048036038101906104099190613d65565b6116bd565b60405161041b91906142a4565b60405180910390f35b61042c61171b565b005b34801561043a57600080fd5b506104436117ad565b6040516104509190614519565b60405180910390f35b34801561046557600080fd5b5061046e6117b7565b60405161047b91906142c6565b60405180910390f35b34801561049057600080fd5b506104996117ca565b6040516104a69190614519565b60405180910390f35b3480156104bb57600080fd5b506104c46117d0565b005b3480156104d257600080fd5b506104ed60048036038101906104e89190613db4565b611858565b005b3480156104fb57600080fd5b506105046118ee565b60405161051191906144e3565b60405180910390f35b34801561052657600080fd5b5061052f611970565b005b34801561053d57600080fd5b50610546611a91565b005b34801561055457600080fd5b5061055d611b3c565b60405161056a9190614519565b60405180910390f35b34801561057f57600080fd5b50610588611b46565b6040516105959190614519565b60405180910390f35b3480156105aa57600080fd5b506105b3611bf1565b6040516105c09190614289565b60405180910390f35b3480156105d557600080fd5b506105f060048036038101906105eb9190613d00565b611c1a565b005b3480156105fe57600080fd5b5061061960048036038101906106149190613df5565b611cf5565b6040516106269190614289565b60405180910390f35b34801561063b57600080fd5b5061065660048036038101906106519190613df5565b611d12565b005b34801561066457600080fd5b5061066d611db2565b60405161067a9190614519565b60405180910390f35b34801561068f57600080fd5b506106aa60048036038101906106a59190613d65565b611dc3565b6040516106b791906142a4565b60405180910390f35b3480156106cc57600080fd5b506106d5611e21565b6040516106e29190614519565b60405180910390f35b3480156106f757600080fd5b50610712600480360381019061070d9190613d29565b611e27565b005b34801561072057600080fd5b5061073b60048036038101906107369190613e6d565b612073565b005b34801561074957600080fd5b50610764600480360381019061075f9190613e6d565b61249d565b005b34801561077257600080fd5b5061077b6125c9565b6040516107889190614519565b60405180910390f35b34801561079d57600080fd5b506107b860048036038101906107b39190613d00565b6125e6565b6040516107c59190614519565b60405180910390f35b3480156107da57600080fd5b506107f560048036038101906107f09190613d00565b61278b565b60405161080291906142a4565b60405180910390f35b34801561081757600080fd5b50610832600480360381019061082d9190613d00565b6127db565b60405161083f91906144fe565b60405180910390f35b34801561085457600080fd5b5061086f600480360381019061086a9190613e6d565b612934565b005b34801561087d57600080fd5b5061089860048036038101906108939190613e1e565b6129c4565b005b3480156108a657600080fd5b506108c160048036038101906108bc9190613d00565b612ad0565b005b3480156108cf57600080fd5b506108d8612bc8565b6040516108e591906142e1565b60405180910390f35b3480156108fa57600080fd5b50610903612c56565b6040516109109190614519565b60405180910390f35b600360019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146109a9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109a090614463565b60405180910390fd5b8060078190555050565b60185481565b600060156000015460156001015414156109d657600090506109f8565b6015600201600060156000015481526020019081526020016000206000015490505b90565b600360009054906101000a900460ff16610a4a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a4190614363565b60405180910390fd5b60008167ffffffffffffffff1611610a97576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a8e90614423565b60405180910390fd5b6002548167ffffffffffffffff16610aaf9190614681565b3414610af0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ae790614323565b60405180910390fd5b6000600360019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f19350505050158015610b5d573d6000803e3d6000fd5b508167ffffffffffffffff1660196000828254610b7a91906145fa565b925050819055503373ffffffffffffffffffffffffffffffffffffffff167ff5ebfcde71acb15a758233f0c9ab25632209399b90a9209a4f2379ec5fcee89f83604051610bc79190614534565b60405180910390a2610bd7612c5c565b610be033612d08565b610c6360405180604001604052808467ffffffffffffffff168152602001600554610c09612eb1565b610c1391906145fa565b815250600d60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020612eb990919063ffffffff16565b610caa600d60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020612f02565b600c60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206002016000828254610cfb91906145fa565b925050819055508167ffffffffffffffff16600c60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000016000828254610d5e91906145fa565b925050819055508167ffffffffffffffff16600c60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001016000828254610dc191906145fa565b92505081905550610dd133612f91565b8167ffffffffffffffff1660096000016000828254610df091906145fa565b92505081905550610dff6130b4565b610e133360136130e790919063ffffffff16565b505050565b60195481565b600360019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610eae576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ea590614463565b60405180910390fd5b60025481610ebc9190614681565b3414610efd576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ef490614323565b60405180910390fd5b3460186000828254610f0f91906145fa565b92505081905550610f1e6130b4565b50565b600360019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610fb1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fa890614463565b60405180910390fd5b806019541015610ff6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fed90614483565b60405180910390fd5b806019600082825461100891906146db565b9250508190555050565b606061105b600e60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020613117565b9050919050565b600360009054906101000a900460ff166110b1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110a890614363565b60405180910390fd5b6110f8600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020612f02565b600c60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600301600082825461114991906145fa565b925050819055508067ffffffffffffffff16600c60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206003015410156111df576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111d6906144c3565b60405180910390fd5b60006002548267ffffffffffffffff166111f99190614681565b9050806018541015611240576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161123790614383565b60405180910390fd5b806018600082825461125291906146db565b925050819055508167ffffffffffffffff16600c60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160008282546112b591906146db565b925050819055508167ffffffffffffffff16600c60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001600082825461131891906146db565b9250508190555060003390508073ffffffffffffffffffffffffffffffffffffffff166108fc839081150290604051600060405180830381858888f1935050505015801561136a573d6000803e3d6000fd5b503373ffffffffffffffffffffffffffffffffffffffff167f141ef67c4a6d3ec2adfb2f66d33c2b11de5b4f34344757554d430570b18a92ec846040516113b19190614534565b60405180910390a26113c16130b4565b6000600c60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000015414156114225761142033601361326490919063ffffffff16565b505b505050565b600360009054906101000a900460ff16611476576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161146d90614363565b60405180910390fd5b6000611481336125e6565b9050818110156114c6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114bd906144a3565b60405180910390fd5b6114ce612c5c565b6114d733612d08565b61152c82600c60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206004015461329490919063ffffffff16565b600c60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600401819055506115c782600c60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600501546132aa90919063ffffffff16565b600c60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206005018190555061161633612f91565b60003390508073ffffffffffffffffffffffffffffffffffffffff166108fc849081150290604051600060405180830381858888f19350505050158015611661573d6000803e3d6000fd5b503373ffffffffffffffffffffffffffffffffffffffff167fbbf701f67a7d285bbd2b9b2dc7a5fee474e6dc3c059183385da6cc9de2be34a9846040516116a89190614519565b60405180910390a26116b86130b4565b505050565b60606117128383600e60008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206132c09092919063ffffffff16565b90509392505050565b600360019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146117ab576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117a290614463565b60405180910390fd5b565b6000612710905090565b600360009054906101000a900460ff1681565b60045481565b6117d86134d8565b73ffffffffffffffffffffffffffffffffffffffff166117f6611bf1565b73ffffffffffffffffffffffffffffffffffffffff161461184c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611843906143e3565b60405180910390fd5b61185660006134e0565b565b6118606134d8565b73ffffffffffffffffffffffffffffffffffffffff1661187e611bf1565b73ffffffffffffffffffffffffffffffffffffffff16146118d4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118cb906143e3565b60405180910390fd5b80600690805190602001906118ea929190613b32565b5050565b6118f6613bb8565b60006009604051806060016040529081600082015481526020016001820154815260200160028201548152505090506000611946600f600101546119386135a4565b6132aa90919063ffffffff16565b905061195f81836040015161329490919063ffffffff16565b826040018181525050819250505090565b600060159054906101000a900460ff16806119985750600060149054906101000a900460ff16155b6119d7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119ce906143a3565b60405180910390fd5b60008060159054906101000a900460ff161590508015611a28576001600060156101000a81548160ff0219169083151502179055506001600060146101000a81548160ff0219169083151502179055505b6103e8600181905550683635c9adc5dea00000600281905550610e10600762015180611a549190614681565b611a5e91906145fa565b6005819055506125806004819055508015611a8e5760008060156101000a81548160ff0219169083151502179055505b50565b600360009054906101000a900460ff16611ae0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ad790614363565b60405180910390fd5b6000611aeb336125e6565b905060008111611b30576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b2790614443565b60405180910390fd5b611b3981611427565b50565b6000600754905090565b6000600360019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611bd8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611bcf90614463565b60405180910390fd5b6000611be460156135ac565b9050806000015191505090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b611c226134d8565b73ffffffffffffffffffffffffffffffffffffffff16611c40611bf1565b73ffffffffffffffffffffffffffffffffffffffff1614611c96576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c8d906143e3565b60405180910390fd5b80600360016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600360006101000a81548160ff02191690831515021790555050565b6000611d0b82601361367190919063ffffffff16565b9050919050565b611d1a6134d8565b73ffffffffffffffffffffffffffffffffffffffff16611d38611bf1565b73ffffffffffffffffffffffffffffffffffffffff1614611d8e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d85906143e3565b60405180910390fd5b80600181905550670de0b6b3a764000081611da99190614681565b60028190555050565b6000611dbe601361368b565b905090565b6060611e188383600d60008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206132c09092919063ffffffff16565b90509392505050565b60055481565b611e2f6134d8565b73ffffffffffffffffffffffffffffffffffffffff16611e4d611bf1565b73ffffffffffffffffffffffffffffffffffffffff1614611ea3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611e9a906143e3565b60405180910390fd5b6000600c60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001015490506000811415611ef9575061206f565b611f0283612d08565b6000600c60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101819055506000600c60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020181905550611fd9600d60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206136a0565b61204860405180604001604052808381526020018467ffffffffffffffff16815250600e60008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020612eb990919063ffffffff16565b61205183612f91565b806009600001600082825461206691906146db565b92505081905550505b5050565b600360009054906101000a900460ff166120c2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016120b990614363565b60405180910390fd5b612109600d60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020612f02565b600c60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201600082825461215a91906145fa565b925050819055508067ffffffffffffffff16600c60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206002015410156121f0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016121e7906143c3565b60405180910390fd5b61221c60405180602001604052808367ffffffffffffffff16815250601561370290919063ffffffff16565b3373ffffffffffffffffffffffffffffffffffffffff167fd81524ca5b038be9f98b286808a6f46f99c8700bce9ab4793dc12a2dbaa4f2d8826040516122629190614534565b60405180910390a2612272612c5c565b61227b33612d08565b6122fe60405180604001604052808367ffffffffffffffff1681526020016005546122a4612eb1565b6122ae91906145fa565b815250600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020612eb990919063ffffffff16565b612345600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020612f02565b600c60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600301600082825461239691906145fa565b925050819055508067ffffffffffffffff16600c60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160008282546123f991906146db565b925050819055508067ffffffffffffffff16600c60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201600082825461245c91906146db565b9250508190555061246c33612f91565b8067ffffffffffffffff166009600001600082825461248b91906146db565b9250508190555061249a6130b4565b50565b6124a56134d8565b73ffffffffffffffffffffffffffffffffffffffff166124c3611bf1565b73ffffffffffffffffffffffffffffffffffffffff1614612519576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612510906143e3565b60405180910390fd5b60008167ffffffffffffffff1611801561253f57506127108167ffffffffffffffff1611155b61257e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161257590614403565b60405180910390fd5b8067ffffffffffffffff166004819055507fe200219383a2dbe79fad4e1549a81b6057429299f33583641c5fdddcdc0b3797816040516125be9190614534565b60405180910390a150565b60006015600001546015600101546125e191906146db565b905090565b600080600c60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600501549050600060085490506000600f600101546126456135a4565b61264f91906146db565b90506000601260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060405180606001604052908160008201548152602001600182015481526020016002820154815250509050600082111561270d5760006126f46126e5600154600f6000015461374190919063ffffffff16565b8461375790919063ffffffff16565b9050612709818561329490919063ffffffff16565b9350505b60008160000151111561277f57600061275d612738600154846000015161374190919063ffffffff16565b61274f8460200151876132aa90919063ffffffff16565b61374190919063ffffffff16565b905061277b61276c828961376d565b8661329490919063ffffffff16565b9450505b83945050505050919050565b60606127d4600d60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020613117565b9050919050565b6127e3613bd9565b6000600c60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060c0016040529081600082015481526020016001820154815260200160028201548152602001600382015481526020016004820154815260200160058201548152505090506128b4600d60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206137a5565b816040018181516128c591906145fa565b91508181525050612913600e60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206137a5565b8160600181815161292491906145fa565b9150818152505080915050919050565b61293c6134d8565b73ffffffffffffffffffffffffffffffffffffffff1661295a611bf1565b73ffffffffffffffffffffffffffffffffffffffff16146129b0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016129a7906143e3565b60405180910390fd5b8067ffffffffffffffff1660058190555050565b6129cc6134d8565b73ffffffffffffffffffffffffffffffffffffffff166129ea611bf1565b73ffffffffffffffffffffffffffffffffffffffff1614612a40576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612a37906143e3565b60405180910390fd5b6000612a4c601361368b565b90506000811415612a5d5750612acb565b612a65612c5c565b60008385612a7391906145fa565b905081811115612a81578190505b60008590505b81811015612abf57612aac612aa682601361367190919063ffffffff16565b85611e27565b8080612ab790614822565b915050612a87565b50612ac86130b4565b50505b505050565b612ad86134d8565b73ffffffffffffffffffffffffffffffffffffffff16612af6611bf1565b73ffffffffffffffffffffffffffffffffffffffff1614612b4c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612b43906143e3565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415612bbc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612bb390614343565b60405180910390fd5b612bc5816134e0565b50565b60068054612bd5906147bf565b80601f0160208091040260200160405190810160405280929190818152602001828054612c01906147bf565b8015612c4e5780601f10612c2357610100808354040283529160200191612c4e565b820191906000526020600020905b815481529060010190602001808311612c3157829003601f168201915b505050505081565b60085481565b6000600f60010154612c6c6135a4565b612c7691906146db565b90506000811480612c8c57506000600f60000154145b15612c975750612d06565b6000612cb3600154600f6000015461374190919063ffffffff16565b9050612cdc612ccb828461375790919063ffffffff16565b60085461329490919063ffffffff16565b600881905550612cfa8260096002015461329490919063ffffffff16565b60096002018190555050505b565b6000601260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060405180606001604052908160008201548152602001600182015481526020016002820154815250509050600081600001511415612d875750612eae565b6000612dcc612da5600154846000015161374190919063ffffffff16565b612dbe84602001516008546132aa90919063ffffffff16565b61374190919063ffffffff16565b90506000612dda828561376d565b9050612e3181600c60008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206005015461329490919063ffffffff16565b600c60008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060050181905550612ea1612e8d82846132aa90919063ffffffff16565b60096001015461329490919063ffffffff16565b6009600101819055505050505b50565b600043905090565b80826002016000846001016000815480929190612ed590614822565b91905055815260200190815260200160002060008201518160000155602082015181600101559050505050565b600080600090506000836000015490505b8360010154811015612f875743846002016000838152602001908152602001600020600101541115612f4457612f87565b8360020160008281526020019081526020016000206000015482612f6891906145fa565b9150612f738461382a565b508080612f7f90614822565b915050612f13565b5080915050919050565b600c60008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010154601260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000181905550600854601260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001018190555061306b612eb1565b601260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206002018190555050565b600960000154600f600001819055506130cb6135a4565b600f600101819055506130dc612eb1565b600f60020181905550565b600061310f836000018373ffffffffffffffffffffffffffffffffffffffff1660001b6138b7565b905092915050565b606060008260000154836001015461312f91906146db565b67ffffffffffffffff81111561316e577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280602002602001820160405280156131a757816020015b613194613c0f565b81526020019060019003908161318c5790505b5090506000836000015490505b836001015481101561325a57836002016000828152602001908152602001600020604051806040016040529081600082015481526020016001820154815250508285600001548361320591906146db565b8151811061323c577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010181905250808061325290614822565b9150506131b4565b5080915050919050565b600061328c836000018373ffffffffffffffffffffffffffffffffffffffff1660001b613927565b905092915050565b600081836132a291906145fa565b905092915050565b600081836132b891906146db565b905092915050565b606060008367ffffffffffffffff1685600001546132de91906145fa565b90508460010154811061336e57600067ffffffffffffffff81111561332c577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405190808252806020026020018201604052801561336557816020015b613352613c0f565b81526020019060019003908161334a5790505b509150506134d1565b60008367ffffffffffffffff168261338691906145fa565b9050856001015481111561339c57856001015490505b600082826133aa91906146db565b67ffffffffffffffff8111156133e9577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405190808252806020026020018201604052801561342257816020015b61340f613c0f565b8152602001906001900390816134075790505b50905060008390505b828110156134c9578760020160008281526020019081526020016000206040518060400160405290816000820154815260200160018201548152505082858361347491906146db565b815181106134ab577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001018190525080806134c190614822565b91505061342b565b508093505050505b9392505050565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600047905090565b6135b4613c29565b81600101548260000154106135fe576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016135f590614303565b60405180910390fd5b600082600201600084600001548152602001908152602001600020604051806020016040529081600082015481525050905082600201600084600001600081548092919061364b90614822565b919050558152602001908152602001600020600080820160009055505080915050919050565b60006136808360000183613aad565b60001c905092915050565b600061369982600001613afe565b9050919050565b6000816000015490505b81600101548110156136f1578160020160008281526020019081526020016000206000808201600090556001820160009055505080806136e990614822565b9150506136aa565b508060010154816000018190555050565b8082600201600084600101600081548092919061371e90614822565b919050558152602001908152602001600020600082015181600001559050505050565b6000818361374f9190614681565b905092915050565b600081836137659190614650565b905092915050565b600061379d61271061378f6137806117ad565b8661374190919063ffffffff16565b61375790919063ffffffff16565b905092915050565b600080600090506000836000015490505b836001015481101561382057438460020160008381526020019081526020016000206001015411156137e757613820565b836002016000828152602001908152602001600020600001548261380b91906145fa565b9150808061381890614822565b9150506137b6565b5080915050919050565b613832613c0f565b60008260020160008460000154815260200190815260200160002060405180604001604052908160008201548152602001600182015481525050905082600201600084600001600081548092919061388990614822565b9190505581526020019081526020016000206000808201600090556001820160009055505080915050919050565b60006138c38383613b0f565b61391c578260000182908060018154018082558091505060019003906000526020600020016000909190919091505582600001805490508360010160008481526020019081526020016000208190555060019050613921565b600090505b92915050565b60008083600101600084815260200190815260200160002054905060008114613aa157600060018261395991906146db565b905060006001866000018054905061397191906146db565b9050818114613a2c5760008660000182815481106139b8577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200154905080876000018481548110613a02577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90600052602060002001819055508387600101600083815260200190815260200160002081905550505b85600001805480613a66577f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b600190038181906000526020600020016000905590558560010160008681526020019081526020016000206000905560019350505050613aa7565b60009150505b92915050565b6000826000018281548110613aeb577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200154905092915050565b600081600001805490509050919050565b600080836001016000848152602001908152602001600020541415905092915050565b828054613b3e906147bf565b90600052602060002090601f016020900481019282613b605760008555613ba7565b82601f10613b7957805160ff1916838001178555613ba7565b82800160010185558215613ba7579182015b82811115613ba6578251825591602001919060010190613b8b565b5b509050613bb49190613c3c565b5090565b60405180606001604052806000815260200160008152602001600081525090565b6040518060c001604052806000815260200160008152602001600081526020016000815260200160008152602001600081525090565b604051806040016040528060008152602001600081525090565b6040518060200160405280600081525090565b5b80821115613c55576000816000905550600101613c3d565b5090565b6000613c6c613c6784614574565b61454f565b905082815260208101848484011115613c8457600080fd5b613c8f84828561477d565b509392505050565b600081359050613ca681614c37565b92915050565b600082601f830112613cbd57600080fd5b8135613ccd848260208601613c59565b91505092915050565b600081359050613ce581614c4e565b92915050565b600081359050613cfa81614c65565b92915050565b600060208284031215613d1257600080fd5b6000613d2084828501613c97565b91505092915050565b60008060408385031215613d3c57600080fd5b6000613d4a85828601613c97565b9250506020613d5b85828601613ceb565b9150509250929050565b600080600060608486031215613d7a57600080fd5b6000613d8886828701613c97565b9350506020613d9986828701613ceb565b9250506040613daa86828701613ceb565b9150509250925092565b600060208284031215613dc657600080fd5b600082013567ffffffffffffffff811115613de057600080fd5b613dec84828501613cac565b91505092915050565b600060208284031215613e0757600080fd5b6000613e1584828501613cd6565b91505092915050565b600080600060608486031215613e3357600080fd5b6000613e4186828701613cd6565b9350506020613e5286828701613cd6565b9250506040613e6386828701613ceb565b9150509250925092565b600060208284031215613e7f57600080fd5b6000613e8d84828501613ceb565b91505092915050565b6000613ea283836141b2565b60408301905092915050565b613eb78161470f565b82525050565b6000613ec8826145b5565b613ed281856145d8565b9350613edd836145a5565b8060005b83811015613f0e578151613ef58882613e96565b9750613f00836145cb565b925050600181019050613ee1565b5085935050505092915050565b613f2481614721565b82525050565b6000613f35826145c0565b613f3f81856145e9565b9350613f4f81856020860161478c565b613f5881614927565b840191505092915050565b6000613f70600e836145e9565b9150613f7b82614938565b602082019050919050565b6000613f93602a836145e9565b9150613f9e82614961565b604082019050919050565b6000613fb66026836145e9565b9150613fc1826149b0565b604082019050919050565b6000613fd96012836145e9565b9150613fe4826149ff565b602082019050919050565b6000613ffc601e836145e9565b915061400782614a28565b602082019050919050565b600061401f602e836145e9565b915061402a82614a51565b604082019050919050565b60006140426014836145e9565b915061404d82614aa0565b602082019050919050565b60006140656020836145e9565b915061407082614ac9565b602082019050919050565b60006140886017836145e9565b915061409382614af2565b602082019050919050565b60006140ab6016836145e9565b91506140b682614b1b565b602082019050919050565b60006140ce6015836145e9565b91506140d982614b44565b602082019050919050565b60006140f16016836145e9565b91506140fc82614b6d565b602082019050919050565b6000614114602e836145e9565b915061411f82614b96565b604082019050919050565b60006141376013836145e9565b915061414282614be5565b602082019050919050565b600061415a6016836145e9565b915061416582614c0e565b602082019050919050565b606082016000820151614186600085018261425c565b506020820151614199602085018261425c565b5060408201516141ac604085018261425c565b50505050565b6040820160008201516141c8600085018261425c565b5060208201516141db602085018261425c565b50505050565b60c0820160008201516141f7600085018261425c565b50602082015161420a602085018261425c565b50604082015161421d604085018261425c565b506060820151614230606085018261425c565b506080820151614243608085018261425c565b5060a082015161425660a085018261425c565b50505050565b6142658161474d565b82525050565b6142748161474d565b82525050565b6142838161476b565b82525050565b600060208201905061429e6000830184613eae565b92915050565b600060208201905081810360008301526142be8184613ebd565b905092915050565b60006020820190506142db6000830184613f1b565b92915050565b600060208201905081810360008301526142fb8184613f2a565b905092915050565b6000602082019050818103600083015261431c81613f63565b9050919050565b6000602082019050818103600083015261433c81613f86565b9050919050565b6000602082019050818103600083015261435c81613fa9565b9050919050565b6000602082019050818103600083015261437c81613fcc565b9050919050565b6000602082019050818103600083015261439c81613fef565b9050919050565b600060208201905081810360008301526143bc81614012565b9050919050565b600060208201905081810360008301526143dc81614035565b9050919050565b600060208201905081810360008301526143fc81614058565b9050919050565b6000602082019050818103600083015261441c8161407b565b9050919050565b6000602082019050818103600083015261443c8161409e565b9050919050565b6000602082019050818103600083015261445c816140c1565b9050919050565b6000602082019050818103600083015261447c816140e4565b9050919050565b6000602082019050818103600083015261449c81614107565b9050919050565b600060208201905081810360008301526144bc8161412a565b9050919050565b600060208201905081810360008301526144dc8161414d565b9050919050565b60006060820190506144f86000830184614170565b92915050565b600060c08201905061451360008301846141e1565b92915050565b600060208201905061452e600083018461426b565b92915050565b6000602082019050614549600083018461427a565b92915050565b600061455961456a565b905061456582826147f1565b919050565b6000604051905090565b600067ffffffffffffffff82111561458f5761458e6148f8565b5b61459882614927565b9050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b60006146058261474d565b91506146108361474d565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156146455761464461486b565b5b828201905092915050565b600061465b8261474d565b91506146668361474d565b9250826146765761467561489a565b5b828204905092915050565b600061468c8261474d565b91506146978361474d565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156146d0576146cf61486b565b5b828202905092915050565b60006146e68261474d565b91506146f18361474d565b9250828210156147045761470361486b565b5b828203905092915050565b600061471a8261472d565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600067ffffffffffffffff82169050919050565b600061477682614757565b9050919050565b82818337600083830152505050565b60005b838110156147aa57808201518184015260208101905061478f565b838111156147b9576000848401525b50505050565b600060028204905060018216806147d757607f821691505b602082108114156147eb576147ea6148c9565b5b50919050565b6147fa82614927565b810181811067ffffffffffffffff82111715614819576148186148f8565b5b80604052505050565b600061482d8261474d565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156148605761485f61486b565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f517565756520697320656d707479000000000000000000000000000000000000600082015250565b7f6d73672e76616c75652073686f756c6420626520766f7465506f776572202a2060008201527f3130303020657468657200000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f506f6f6c206973206e6f74207365747465640000000000000000000000000000600082015250565b7f576974686472617761626c6520434658206973206e6f7420656e6f7567680000600082015250565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b7f4c6f636b6564206973206e6f7420656e6f756768000000000000000000000000600082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f726174696f2073686f756c6420626520312d3130303030000000000000000000600082015250565b7f4d696e696d616c20766f7465506f776572206973203100000000000000000000600082015250565b7f4e6f20636c61696d61626c6520696e7465726573740000000000000000000000600082015250565b7f4f6e6c792062726964676520697320616c6c6f77656400000000000000000000600082015250565b7f63726f7373696e67566f7465732073686f756c6420626520677265617465722060008201527f7468616e20766f7465506f776572000000000000000000000000000000000000602082015250565b7f496e746572657374206e6f7420656e6f75676800000000000000000000000000600082015250565b7f556e6c6f636b6564206973206e6f7420656e6f75676800000000000000000000600082015250565b614c408161470f565b8114614c4b57600080fd5b50565b614c578161474d565b8114614c6257600080fd5b50565b614c6e81614757565b8114614c7957600080fd5b5056fea2646970667358221220cfca631dfe41114ee790047b45ec8fd1925e954920f11de5887341cfbc101ec764736f6c63430008040033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}
