# ioBroker IEC 60870-5-104 Adapter

IEC 60870-5-104 adapter for ioBroker with master and slave mode.

## Status

Initial implementation for common IEC-104 use cases:

- Master mode as controlling station.
- Slave mode as controlled station.
- STARTDT/STOPDT/TESTFR handling.
- I/S/U frame handling with sequence numbers.
- General interrogation `C_IC_NA_1`.
- Configurable data point table.
- Automatic creation of additional master data points when unknown IOAs are received.
- Localized Admin UI labels in German and English.

## Supported type IDs

The data point table contains the IEC type ID, the short IEC name and a readable description.

Supported monitoring types include `M_SP_NA_1` through `M_PS_NA_1` and the CP56 variants `M_SP_TB_1` through `M_EP_TF_1`.

Supported command/system types include `C_SC_NA_1` through `C_CD_NA_1`.

Supported file types include `F_FR_NA_1` through `F_DR_TA_1`. Variable file payloads are exposed as raw hex strings.

Commands are rejected while `Read only` is enabled.

## Configuration

Set `Enable communication` only after checking all settings.

Important settings:

- Operating mode: master or slave.
- Remote host and TCP port for master mode.
- Bind address and TCP port for slave mode.
- Common address, originator address, and address field lengths.
- T1/T2/T3 timeouts and K/W windows.
- General interrogation after connect and optional interval.
- Data point table with IOA, type, ioBroker state, scaling factor and offset.
- TSV import/export in the data point tab. TSV columns: `enabled`, `name`, `ioa`, `type`, `stateId`, `writable`, `unit`, `factor`, `offset`.

## Install from GitHub

```bash
iobroker url https://github.com/your-name/ioBroker.iec104
iobroker add iec104
```

## Notes

IEC 60870-5-104 is used in automation and energy systems. Validate the configuration in a test environment before connecting to productive systems.
