//SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

interface Contract {
    function attempt() external;
}

contract PassCallData {
    function callContractAttempt() external {
        Contract(0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502).attempt();
    }

    /* The Manual approach
    function callContractAttempt() external {
        bytes memory payload = abi.encodeWithSignature("attempt()");

        (bool success, ) = 0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502.call(
            payload
        );
        require(success);
    }
    */
}
