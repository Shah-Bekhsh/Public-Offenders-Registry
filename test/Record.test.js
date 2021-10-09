const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiledRegistry = require('../ethereum/build/Registry.json');
const compiledRecord = require('../ethereum/build/Record.json');

let accounts;
let registry;
let recordAddress;
let record;
let criminal_name = 'Abdul Rehman';
let criminal_address = 'Jhopar Patti, 100 Feet Road, Yousuf Goth Saeedabad Karachi';
let criminal_CNIC = '4550288577179';
let criminal_FIR = '180/15 U/S 23(I)A';
let criminal_Zone = 'Mouchko';

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();

  registry = await new web3.eth.Contract(JSON.parse(compiledRegistry.interface))
    .deploy( { data: compiledRegistry.bytecode } )
    .send( { from: accounts[0], gas: '1000000' } );

  await registry.methods.createRecord().send({
    from: accounts[0],
    gas: '1000000'
  });

  [recordAddress] = await registry.methods.listOffenders().call();
  record = await new web3.eth.Contract(
    JSON.parse(compiledRecord.interface),
    recordAddress
  );
});

describe('Records', () => {
  it('deploys a registry and a record', () => {
    assert.ok(registry.options.address);
    assert.ok(record.options.address);
  });

  it( 'can only be created by the manager' , async () => {
    const manager = await record.methods.manager().call();
    assert.equal(accounts[0], manager);
  });

  it('inserts data correctly', async() => {
    await record.methods
      .addOffender(criminal_name, criminal_CNIC, criminal_Zone, criminal_address, criminal_FIR)
      .send({
        from: accounts[0],
        gas: '1000000'
      });

    let status = await record.methods.status().call();
    assert.equal(status, 'Success');
  });

  it('returns correct values using get function', async () => {
    await record.methods
      .addOffender(criminal_name, criminal_CNIC, criminal_Zone, criminal_address, criminal_FIR)
      .send({
        from: accounts[0],
        gas: '1000000'
      });

    var data = await record.methods.getOffender(0).call();
    console.log(data);
  });
});
