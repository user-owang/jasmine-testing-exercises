describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should add a new table row in the serverTable tbody for each server added', function() {
    submitServerInfo();
    serverNameInput.value = 'John';
    submitServerInfo();

    expect(document.querySelectorAll('#serverTable tbody tr').length).toEqual(2);
  });

  it('should add an id of server1 to the first row', function(){
    submitServerInfo();

    expect(document.querySelector('#serverTable tbody tr').id).toEqual('server1');
  })

  afterEach(function() {
    // teardown logic
    allServers = {};
    serverId = 0;
    updateServerTable();
  });
});
