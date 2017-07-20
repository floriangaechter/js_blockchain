class Block {
  constructor(index, timestamp, data, previous_hash) {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.previous_hash = previous_hash;
    this.hash = this.hash_block();
  }

  hash_block() {
    const sha = sjcl.hash.sha256.hash(this.index + this.timestamp + this.data + self.previous_hash);

    return sjcl.codec.hex.fromBits(sha);
  }
}

function create_genesis_block() {
  return new Block(0, Date.now(), "Genesis Block", "0");
}

function next_block(last_block) {
  const this_index = last_block.index + 1;
  const this_timestamp = Date.now();
  const this_data = "Hey! I'm block " + this_index;
  const this_hash = last_block.hash;

  return new Block(this_index, this_timestamp, this_data, this_hash);
}
