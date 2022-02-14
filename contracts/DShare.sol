// SPDX-License-Identifier: SimPL-2.0
pragma solidity ^0.8.0;

// 1. Model the share
// 2. Store the share
// 3. Upload share
// 4. List share

contract Dshare {
  uint public shareCount = 0;
  string public name = "Dshare";
  //Create id=>struct mapping
  mapping(uint => Share) public shares;

  //Create Struct
  struct Share {
    uint id;
    string hash;
    string title;
    address author;
  }

  //Create Event
  event ShareUploaded(
    uint id,
    string hash,
    string title,
    address author
  );

 
  constructor() {
  }

  function uploadShare(string memory _shareHash, string memory _title) public {
    // Make sure the share hash exists
    require(bytes(_shareHash).length > 0);
    // Make sure share title exists
    require(bytes(_title).length > 0);
    // Make sure uploader address exists
    require(msg.sender!=address(0));

    // Increment share id
    shareCount ++;
    // Add share to the contract
    shares[shareCount] = Share(shareCount, _shareHash, _title, msg.sender);
    // Trigger an event
    emit ShareUploaded(shareCount, _shareHash, _title, msg.sender);
  }
}
