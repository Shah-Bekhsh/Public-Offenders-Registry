pragma solidity ^0.4.17;
//v8
contract Registry {
    address[] registerdOffenders;

    function createRecord() public {
        address newRecord = new Record(msg.sender);
        registerdOffenders.push(newRecord);
    }

    function listOffenders() public view returns (address[]) {
        return registerdOffenders;
    }
}

contract Record {
    struct Offender {
        string con_name;
        uint cnic;
        string zone;
        string con_address;
        string fir_number;
        string fir_description;
    }

    Offender[] offenders;
    address public manager;
    string public status = 'Pending';

    //mapping(string => Offender[]) registered;

    // address[] public approvers;
    // The above approvers array can be later utilized to add functionality into our
    // contract to allow different government bodies to approve an offender before adding his/her
    // information into the contract.

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }

    function Record(address creator) public {
        manager = creator;
        // message = 'Initialized registry';
    }

    function addOffender(string con_name, uint cnic, string zone, string con_address, string fir_number, string fir_description)
    public restricted{
        Offender memory newOffender = Offender({
           con_name: con_name,
           cnic: cnic,
           zone: zone,
           con_address: con_address,
           fir_number: fir_number,
           fir_description: fir_description
        });

        offenders.push(newOffender);
        status = 'Approved';
    }

    function getOffender() public view returns(string, uint, string, string, string, string) {
      return (
        offenders[0].con_name,
        offenders[0].cnic,
        offenders[0].zone,
        offenders[0].con_address,
        offenders[0].fir_number,
        offenders[0].fir_description
        );
    }
}
