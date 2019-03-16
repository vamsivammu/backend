pragma solidity^0.4.22;
contract s2s{
    bytes32 am = "candid";
    uint32 s1am;
    function setamount(uint32 b) public{
        s1am = b;
    }
    function deductamount() public view returns(uint32){
        return s1am;
    }
}