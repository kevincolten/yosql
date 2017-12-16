module.exports = {
  "test": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "AA": {
        "type": "TEXT",
        "order": 1
      },
      "AM": {
        "type": "TEXT",
        "order": 2
      },
      "BA": {
        "type": "TEXT",
        "order": 3
      },
      "BM": {
        "type": "TEXT",
        "order": 4
      },
      "CA": {
        "type": "TEXT",
        "order": 5
      },
      "CM": {
        "type": "TEXT",
        "order": 6
      },
      "DA": {
        "type": "TEXT",
        "order": 7
      },
      "DM": {
        "type": "TEXT",
        "order": 8
      },
      "EA": {
        "type": "TEXT",
        "order": 9
      },
      "EM": {
        "type": "TEXT",
        "order": 10
      },
      "FA": {
        "type": "TEXT",
        "order": 11
      },
      "FM": {
        "type": "TEXT",
        "order": 12
      },
      "GA": {
        "type": "TEXT",
        "order": 13
      },
      "GM": {
        "type": "TEXT",
        "order": 14
      },
      "HA": {
        "type": "TEXT",
        "order": 15
      },
      "HM": {
        "type": "TEXT",
        "order": 16
      },
      "IA": {
        "type": "TEXT",
        "order": 17
      },
      "IM": {
        "type": "TEXT",
        "order": 18
      },
      "JA": {
        "type": "TEXT",
        "order": 19
      },
      "JM": {
        "type": "TEXT",
        "order": 20
      },
      "KA": {
        "type": "TEXT",
        "order": 21
      },
      "KM": {
        "type": "TEXT",
        "order": 22
      },
      "LA": {
        "type": "TEXT",
        "order": 23
      },
      "LM": {
        "type": "TEXT",
        "order": 24
      },
      "MA": {
        "type": "TEXT",
        "order": 25
      },
      "MM": {
        "type": "TEXT",
        "order": 26
      },
      "NA": {
        "type": "TEXT",
        "order": 27
      },
      "NM": {
        "type": "TEXT",
        "order": 28
      },
      "OA": {
        "type": "TEXT",
        "order": 29
      },
      "OM": {
        "type": "TEXT",
        "order": 30
      },
      "PA": {
        "type": "TEXT",
        "order": 31
      },
      "PM": {
        "type": "TEXT",
        "order": 32
      },
      "QA": {
        "type": "TEXT",
        "order": 33
      },
      "QM": {
        "type": "TEXT",
        "order": 34
      },
      "RA": {
        "type": "TEXT",
        "order": 35
      },
      "RM": {
        "type": "TEXT",
        "order": 36
      },
      "SA": {
        "type": "TEXT",
        "order": 37
      },
      "SM": {
        "type": "TEXT",
        "order": 38
      },
      "TA": {
        "type": "TEXT",
        "order": 39
      },
      "TM": {
        "type": "TEXT",
        "order": 40
      },
      "UA": {
        "type": "TEXT",
        "order": 41
      },
      "UM": {
        "type": "TEXT",
        "order": 42
      },
      "VA": {
        "type": "TEXT",
        "order": 43
      },
      "VM": {
        "type": "TEXT",
        "order": 44
      },
      "WA": {
        "type": "TEXT",
        "order": 45
      },
      "WM": {
        "type": "TEXT",
        "order": 46
      },
      "XA": {
        "type": "TEXT",
        "order": 47
      },
      "XM": {
        "type": "TEXT",
        "order": 48
      },
      "YA": {
        "type": "TEXT",
        "order": 49
      },
      "YM": {
        "type": "TEXT",
        "order": 50
      },
      "ZA": {
        "type": "TEXT",
        "order": 51
      },
      "ZM": {
        "type": "TEXT",
        "order": 52
      }
    },
    "length": 26,
    "queries": {
      "create": "CREATE TABLE `test` (yosql_id INTEGER PRIMARY KEY UNIQUE, `AA` TEXT, `AM` TEXT, `BA` TEXT, `BM` TEXT, `CA` TEXT, `CM` TEXT, `DA` TEXT, `DM` TEXT, `EA` TEXT, `EM` TEXT, `FA` TEXT, `FM` TEXT, `GA` TEXT, `GM` TEXT, `HA` TEXT, `HM` TEXT, `IA` TEXT, `IM` TEXT, `JA` TEXT, `JM` TEXT, `KA` TEXT, `KM` TEXT, `LA` TEXT, `LM` TEXT, `MA` TEXT, `MM` TEXT, `NA` TEXT, `NM` TEXT, `OA` TEXT, `OM` TEXT, `PA` TEXT, `PM` TEXT, `QA` TEXT, `QM` TEXT, `RA` TEXT, `RM` TEXT, `SA` TEXT, `SM` TEXT, `TA` TEXT, `TM` TEXT, `UA` TEXT, `UM` TEXT, `VA` TEXT, `VM` TEXT, `WA` TEXT, `WM` TEXT, `XA` TEXT, `XM` TEXT, `YA` TEXT, `YM` TEXT, `ZA` TEXT, `ZM` TEXT);",
      "insert": "INSERT INTO test (yosql_id, AA, AM, BA, BM, CA, CM, DA, DM, EA, EM, FA, FM, GA, GM, HA, HM, IA, IM, JA, JM, KA, KM, LA, LM, MA, MM, NA, NM, OA, OM, PA, PM, QA, QM, RA, RM, SA, SM, TA, TM, UA, UM, VA, VM, WA, WM, XA, XM, YA, YM, ZA, ZM) VALUES ('1', 'B', 'N', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL'), ('2', '', '', 'B', 'N', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL'), ('3', '', '', '', '', 'B', 'N', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL'), ('4', '', '', '', '', '', '', 'B', 'N', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL'), ('5', '', '', '', '', '', '', '', '', 'B', 'N', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL'), ('6', '', '', '', '', '', '', '', '', '', '', 'B', 'N', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL'), ('7', '', '', '', '', '', '', '', '', '', '', '', '', 'B', 'N', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL'), ('8', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'B', 'N', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL'), ('9', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'B', 'N', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL'), ('10', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'B', 'N', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL'), ('11', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'B', 'N', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL'), ('12', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'B', 'N', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL'), ('13', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'B', 'N', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL'), ('14', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'B', 'N', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL'), ('15', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'B', 'N', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL'), ('16', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'B', 'N', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL'), ('17', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'B', 'N', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL'), ('18', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'B', 'N', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL'), ('19', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'B', 'N', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL'), ('20', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'B', 'N', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL'), ('21', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'B', 'N', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL'), ('22', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'B', 'N', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL'), ('23', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'B', 'N', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL'), ('24', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'B', 'N', 'NULL', 'NULL', 'NULL', 'NULL'), ('25', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'B', 'N', 'NULL', 'NULL'), ('26', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'B', 'N');"
    },
    "rows": [
      {
        "AA": "B",
        "AM": "N",
        "yosql_id": 1
      },
      {
        "AA": "",
        "AM": "",
        "yosql_id": 2,
        "BA": "B",
        "BM": "N"
      },
      {
        "AA": "",
        "AM": "",
        "yosql_id": 3,
        "BA": "",
        "BM": "",
        "CA": "B",
        "CM": "N"
      },
      {
        "AA": "",
        "AM": "",
        "yosql_id": 4,
        "BA": "",
        "BM": "",
        "CA": "",
        "CM": "",
        "DA": "B",
        "DM": "N"
      },
      {
        "AA": "",
        "AM": "",
        "yosql_id": 5,
        "BA": "",
        "BM": "",
        "CA": "",
        "CM": "",
        "DA": "",
        "DM": "",
        "EA": "B",
        "EM": "N"
      },
      {
        "AA": "",
        "AM": "",
        "yosql_id": 6,
        "BA": "",
        "BM": "",
        "CA": "",
        "CM": "",
        "DA": "",
        "DM": "",
        "EA": "",
        "EM": "",
        "FA": "B",
        "FM": "N"
      },
      {
        "AA": "",
        "AM": "",
        "yosql_id": 7,
        "BA": "",
        "BM": "",
        "CA": "",
        "CM": "",
        "DA": "",
        "DM": "",
        "EA": "",
        "EM": "",
        "FA": "",
        "FM": "",
        "GA": "B",
        "GM": "N"
      },
      {
        "AA": "",
        "AM": "",
        "yosql_id": 8,
        "BA": "",
        "BM": "",
        "CA": "",
        "CM": "",
        "DA": "",
        "DM": "",
        "EA": "",
        "EM": "",
        "FA": "",
        "FM": "",
        "GA": "",
        "GM": "",
        "HA": "B",
        "HM": "N"
      },
      {
        "AA": "",
        "AM": "",
        "yosql_id": 9,
        "BA": "",
        "BM": "",
        "CA": "",
        "CM": "",
        "DA": "",
        "DM": "",
        "EA": "",
        "EM": "",
        "FA": "",
        "FM": "",
        "GA": "",
        "GM": "",
        "HA": "",
        "HM": "",
        "IA": "B",
        "IM": "N"
      },
      {
        "AA": "",
        "AM": "",
        "yosql_id": 10,
        "BA": "",
        "BM": "",
        "CA": "",
        "CM": "",
        "DA": "",
        "DM": "",
        "EA": "",
        "EM": "",
        "FA": "",
        "FM": "",
        "GA": "",
        "GM": "",
        "HA": "",
        "HM": "",
        "IA": "",
        "IM": "",
        "JA": "B",
        "JM": "N"
      },
      {
        "AA": "",
        "AM": "",
        "yosql_id": 11,
        "BA": "",
        "BM": "",
        "CA": "",
        "CM": "",
        "DA": "",
        "DM": "",
        "EA": "",
        "EM": "",
        "FA": "",
        "FM": "",
        "GA": "",
        "GM": "",
        "HA": "",
        "HM": "",
        "IA": "",
        "IM": "",
        "JA": "",
        "JM": "",
        "KA": "B",
        "KM": "N"
      },
      {
        "AA": "",
        "AM": "",
        "yosql_id": 12,
        "BA": "",
        "BM": "",
        "CA": "",
        "CM": "",
        "DA": "",
        "DM": "",
        "EA": "",
        "EM": "",
        "FA": "",
        "FM": "",
        "GA": "",
        "GM": "",
        "HA": "",
        "HM": "",
        "IA": "",
        "IM": "",
        "JA": "",
        "JM": "",
        "KA": "",
        "KM": "",
        "LA": "B",
        "LM": "N"
      },
      {
        "AA": "",
        "AM": "",
        "yosql_id": 13,
        "BA": "",
        "BM": "",
        "CA": "",
        "CM": "",
        "DA": "",
        "DM": "",
        "EA": "",
        "EM": "",
        "FA": "",
        "FM": "",
        "GA": "",
        "GM": "",
        "HA": "",
        "HM": "",
        "IA": "",
        "IM": "",
        "JA": "",
        "JM": "",
        "KA": "",
        "KM": "",
        "LA": "",
        "LM": "",
        "MA": "B",
        "MM": "N"
      },
      {
        "AA": "",
        "AM": "",
        "yosql_id": 14,
        "BA": "",
        "BM": "",
        "CA": "",
        "CM": "",
        "DA": "",
        "DM": "",
        "EA": "",
        "EM": "",
        "FA": "",
        "FM": "",
        "GA": "",
        "GM": "",
        "HA": "",
        "HM": "",
        "IA": "",
        "IM": "",
        "JA": "",
        "JM": "",
        "KA": "",
        "KM": "",
        "LA": "",
        "LM": "",
        "MA": "",
        "MM": "",
        "NA": "B",
        "NM": "N"
      },
      {
        "AA": "",
        "AM": "",
        "yosql_id": 15,
        "BA": "",
        "BM": "",
        "CA": "",
        "CM": "",
        "DA": "",
        "DM": "",
        "EA": "",
        "EM": "",
        "FA": "",
        "FM": "",
        "GA": "",
        "GM": "",
        "HA": "",
        "HM": "",
        "IA": "",
        "IM": "",
        "JA": "",
        "JM": "",
        "KA": "",
        "KM": "",
        "LA": "",
        "LM": "",
        "MA": "",
        "MM": "",
        "NA": "",
        "NM": "",
        "OA": "B",
        "OM": "N"
      },
      {
        "AA": "",
        "AM": "",
        "yosql_id": 16,
        "BA": "",
        "BM": "",
        "CA": "",
        "CM": "",
        "DA": "",
        "DM": "",
        "EA": "",
        "EM": "",
        "FA": "",
        "FM": "",
        "GA": "",
        "GM": "",
        "HA": "",
        "HM": "",
        "IA": "",
        "IM": "",
        "JA": "",
        "JM": "",
        "KA": "",
        "KM": "",
        "LA": "",
        "LM": "",
        "MA": "",
        "MM": "",
        "NA": "",
        "NM": "",
        "OA": "",
        "OM": "",
        "PA": "B",
        "PM": "N"
      },
      {
        "AA": "",
        "AM": "",
        "yosql_id": 17,
        "BA": "",
        "BM": "",
        "CA": "",
        "CM": "",
        "DA": "",
        "DM": "",
        "EA": "",
        "EM": "",
        "FA": "",
        "FM": "",
        "GA": "",
        "GM": "",
        "HA": "",
        "HM": "",
        "IA": "",
        "IM": "",
        "JA": "",
        "JM": "",
        "KA": "",
        "KM": "",
        "LA": "",
        "LM": "",
        "MA": "",
        "MM": "",
        "NA": "",
        "NM": "",
        "OA": "",
        "OM": "",
        "PA": "",
        "PM": "",
        "QA": "B",
        "QM": "N"
      },
      {
        "AA": "",
        "AM": "",
        "yosql_id": 18,
        "BA": "",
        "BM": "",
        "CA": "",
        "CM": "",
        "DA": "",
        "DM": "",
        "EA": "",
        "EM": "",
        "FA": "",
        "FM": "",
        "GA": "",
        "GM": "",
        "HA": "",
        "HM": "",
        "IA": "",
        "IM": "",
        "JA": "",
        "JM": "",
        "KA": "",
        "KM": "",
        "LA": "",
        "LM": "",
        "MA": "",
        "MM": "",
        "NA": "",
        "NM": "",
        "OA": "",
        "OM": "",
        "PA": "",
        "PM": "",
        "QA": "",
        "QM": "",
        "RA": "B",
        "RM": "N"
      },
      {
        "AA": "",
        "AM": "",
        "yosql_id": 19,
        "BA": "",
        "BM": "",
        "CA": "",
        "CM": "",
        "DA": "",
        "DM": "",
        "EA": "",
        "EM": "",
        "FA": "",
        "FM": "",
        "GA": "",
        "GM": "",
        "HA": "",
        "HM": "",
        "IA": "",
        "IM": "",
        "JA": "",
        "JM": "",
        "KA": "",
        "KM": "",
        "LA": "",
        "LM": "",
        "MA": "",
        "MM": "",
        "NA": "",
        "NM": "",
        "OA": "",
        "OM": "",
        "PA": "",
        "PM": "",
        "QA": "",
        "QM": "",
        "RA": "",
        "RM": "",
        "SA": "B",
        "SM": "N"
      },
      {
        "AA": "",
        "AM": "",
        "yosql_id": 20,
        "BA": "",
        "BM": "",
        "CA": "",
        "CM": "",
        "DA": "",
        "DM": "",
        "EA": "",
        "EM": "",
        "FA": "",
        "FM": "",
        "GA": "",
        "GM": "",
        "HA": "",
        "HM": "",
        "IA": "",
        "IM": "",
        "JA": "",
        "JM": "",
        "KA": "",
        "KM": "",
        "LA": "",
        "LM": "",
        "MA": "",
        "MM": "",
        "NA": "",
        "NM": "",
        "OA": "",
        "OM": "",
        "PA": "",
        "PM": "",
        "QA": "",
        "QM": "",
        "RA": "",
        "RM": "",
        "SA": "",
        "SM": "",
        "TA": "B",
        "TM": "N"
      },
      {
        "AA": "",
        "AM": "",
        "yosql_id": 21,
        "BA": "",
        "BM": "",
        "CA": "",
        "CM": "",
        "DA": "",
        "DM": "",
        "EA": "",
        "EM": "",
        "FA": "",
        "FM": "",
        "GA": "",
        "GM": "",
        "HA": "",
        "HM": "",
        "IA": "",
        "IM": "",
        "JA": "",
        "JM": "",
        "KA": "",
        "KM": "",
        "LA": "",
        "LM": "",
        "MA": "",
        "MM": "",
        "NA": "",
        "NM": "",
        "OA": "",
        "OM": "",
        "PA": "",
        "PM": "",
        "QA": "",
        "QM": "",
        "RA": "",
        "RM": "",
        "SA": "",
        "SM": "",
        "TA": "",
        "TM": "",
        "UA": "B",
        "UM": "N"
      },
      {
        "AA": "",
        "AM": "",
        "yosql_id": 22,
        "BA": "",
        "BM": "",
        "CA": "",
        "CM": "",
        "DA": "",
        "DM": "",
        "EA": "",
        "EM": "",
        "FA": "",
        "FM": "",
        "GA": "",
        "GM": "",
        "HA": "",
        "HM": "",
        "IA": "",
        "IM": "",
        "JA": "",
        "JM": "",
        "KA": "",
        "KM": "",
        "LA": "",
        "LM": "",
        "MA": "",
        "MM": "",
        "NA": "",
        "NM": "",
        "OA": "",
        "OM": "",
        "PA": "",
        "PM": "",
        "QA": "",
        "QM": "",
        "RA": "",
        "RM": "",
        "SA": "",
        "SM": "",
        "TA": "",
        "TM": "",
        "UA": "",
        "UM": "",
        "VA": "B",
        "VM": "N"
      },
      {
        "AA": "",
        "AM": "",
        "yosql_id": 23,
        "BA": "",
        "BM": "",
        "CA": "",
        "CM": "",
        "DA": "",
        "DM": "",
        "EA": "",
        "EM": "",
        "FA": "",
        "FM": "",
        "GA": "",
        "GM": "",
        "HA": "",
        "HM": "",
        "IA": "",
        "IM": "",
        "JA": "",
        "JM": "",
        "KA": "",
        "KM": "",
        "LA": "",
        "LM": "",
        "MA": "",
        "MM": "",
        "NA": "",
        "NM": "",
        "OA": "",
        "OM": "",
        "PA": "",
        "PM": "",
        "QA": "",
        "QM": "",
        "RA": "",
        "RM": "",
        "SA": "",
        "SM": "",
        "TA": "",
        "TM": "",
        "UA": "",
        "UM": "",
        "VA": "",
        "VM": "",
        "WA": "B",
        "WM": "N"
      },
      {
        "AA": "",
        "AM": "",
        "yosql_id": 24,
        "BA": "",
        "BM": "",
        "CA": "",
        "CM": "",
        "DA": "",
        "DM": "",
        "EA": "",
        "EM": "",
        "FA": "",
        "FM": "",
        "GA": "",
        "GM": "",
        "HA": "",
        "HM": "",
        "IA": "",
        "IM": "",
        "JA": "",
        "JM": "",
        "KA": "",
        "KM": "",
        "LA": "",
        "LM": "",
        "MA": "",
        "MM": "",
        "NA": "",
        "NM": "",
        "OA": "",
        "OM": "",
        "PA": "",
        "PM": "",
        "QA": "",
        "QM": "",
        "RA": "",
        "RM": "",
        "SA": "",
        "SM": "",
        "TA": "",
        "TM": "",
        "UA": "",
        "UM": "",
        "VA": "",
        "VM": "",
        "WA": "",
        "WM": "",
        "XA": "B",
        "XM": "N"
      },
      {
        "AA": "",
        "AM": "",
        "yosql_id": 25,
        "BA": "",
        "BM": "",
        "CA": "",
        "CM": "",
        "DA": "",
        "DM": "",
        "EA": "",
        "EM": "",
        "FA": "",
        "FM": "",
        "GA": "",
        "GM": "",
        "HA": "",
        "HM": "",
        "IA": "",
        "IM": "",
        "JA": "",
        "JM": "",
        "KA": "",
        "KM": "",
        "LA": "",
        "LM": "",
        "MA": "",
        "MM": "",
        "NA": "",
        "NM": "",
        "OA": "",
        "OM": "",
        "PA": "",
        "PM": "",
        "QA": "",
        "QM": "",
        "RA": "",
        "RM": "",
        "SA": "",
        "SM": "",
        "TA": "",
        "TM": "",
        "UA": "",
        "UM": "",
        "VA": "",
        "VM": "",
        "WA": "",
        "WM": "",
        "XA": "",
        "XM": "",
        "YA": "B",
        "YM": "N"
      },
      {
        "AA": "",
        "AM": "",
        "yosql_id": 26,
        "BA": "",
        "BM": "",
        "CA": "",
        "CM": "",
        "DA": "",
        "DM": "",
        "EA": "",
        "EM": "",
        "FA": "",
        "FM": "",
        "GA": "",
        "GM": "",
        "HA": "",
        "HM": "",
        "IA": "",
        "IM": "",
        "JA": "",
        "JM": "",
        "KA": "",
        "KM": "",
        "LA": "",
        "LM": "",
        "MA": "",
        "MM": "",
        "NA": "",
        "NM": "",
        "OA": "",
        "OM": "",
        "PA": "",
        "PM": "",
        "QA": "",
        "QM": "",
        "RA": "",
        "RM": "",
        "SA": "",
        "SM": "",
        "TA": "",
        "TM": "",
        "UA": "",
        "UM": "",
        "VA": "",
        "VM": "",
        "WA": "",
        "WM": "",
        "XA": "",
        "XM": "",
        "YA": "",
        "YM": "",
        "ZA": "B",
        "ZM": "N"
      }
    ]
  },
  "test_AC": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "AC": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 3,
    "queries": {
      "create": "CREATE TABLE `test_AC` (yosql_id INTEGER PRIMARY KEY UNIQUE, `AC` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_AC (yosql_id, AC, test_yosql_id) VALUES ('1', 'D', '1'), ('2', 'E', '1'), ('3', 'F', '1');"
    },
    "rows": [
      {
        "AC": "D",
        "test_yosql_id": 1,
        "yosql_id": 1
      },
      {
        "AC": "E",
        "test_yosql_id": 1,
        "yosql_id": 2
      },
      {
        "AC": "F",
        "test_yosql_id": 1,
        "yosql_id": 3
      }
    ]
  },
  "test_AG": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "H": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_AG` (yosql_id INTEGER PRIMARY KEY UNIQUE, `H` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_AG (yosql_id, H, test_yosql_id) VALUES ('1', 'I', '1');"
    },
    "rows": [
      {
        "H": "I",
        "test_yosql_id": 1,
        "yosql_id": 1
      }
    ]
  },
  "test_AJ": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "K": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_AJ` (yosql_id INTEGER PRIMARY KEY UNIQUE, `K` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_AJ (yosql_id, K, test_yosql_id) VALUES ('1', 'L', '1');"
    },
    "rows": [
      {
        "K": "L",
        "test_yosql_id": 1,
        "yosql_id": 1
      }
    ]
  },
  "test_AR": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "S": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_AR` (yosql_id INTEGER PRIMARY KEY UNIQUE, `S` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_AR (yosql_id, S, test_yosql_id) VALUES ('1', 'T', '1');"
    },
    "rows": [
      {
        "S": "T",
        "test_yosql_id": 1,
        "yosql_id": 1
      }
    ]
  },
  "test_AU": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 1
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_AU` (yosql_id INTEGER PRIMARY KEY UNIQUE, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_AU (yosql_id, test_yosql_id) VALUES ('1', '1');"
    },
    "rows": [
      {
        "test_yosql_id": 1,
        "yosql_id": 1
      }
    ]
  },
  "test_AU_V": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "V": {
        "type": "TEXT",
        "order": 1
      },
      "test_AU_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 3,
    "queries": {
      "create": "CREATE TABLE `test_AU_V` (yosql_id INTEGER PRIMARY KEY UNIQUE, `V` TEXT, `test_AU_yosql_id` TEXT);",
      "insert": "INSERT INTO test_AU_V (yosql_id, V, test_AU_yosql_id) VALUES ('1', 'P', '1'), ('2', 'Q', '1'), ('3', 'R', '1');"
    },
    "rows": [
      {
        "V": "P",
        "test_AU_yosql_id": 1,
        "yosql_id": 1
      },
      {
        "V": "Q",
        "test_AU_yosql_id": 1,
        "yosql_id": 2
      },
      {
        "V": "R",
        "test_AU_yosql_id": 1,
        "yosql_id": 3
      }
    ]
  },
  "test_AX": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "AX": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 2,
    "queries": {
      "create": "CREATE TABLE `test_AX` (yosql_id INTEGER PRIMARY KEY UNIQUE, `AX` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_AX (yosql_id, AX, test_yosql_id) VALUES ('1', 'Y', '1'), ('2', 'Z', '1');"
    },
    "rows": [
      {
        "AX": "Y",
        "test_yosql_id": 1,
        "yosql_id": 1
      },
      {
        "AX": "Z",
        "test_yosql_id": 1,
        "yosql_id": 2
      }
    ]
  },
  "test_BC": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "BC": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 3,
    "queries": {
      "create": "CREATE TABLE `test_BC` (yosql_id INTEGER PRIMARY KEY UNIQUE, `BC` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_BC (yosql_id, BC, test_yosql_id) VALUES ('1', 'D', '2'), ('2', 'E', '2'), ('3', 'F', '2');"
    },
    "rows": [
      {
        "BC": "D",
        "test_yosql_id": 2,
        "yosql_id": 1
      },
      {
        "BC": "E",
        "test_yosql_id": 2,
        "yosql_id": 2
      },
      {
        "BC": "F",
        "test_yosql_id": 2,
        "yosql_id": 3
      }
    ]
  },
  "test_BG": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "H": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_BG` (yosql_id INTEGER PRIMARY KEY UNIQUE, `H` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_BG (yosql_id, H, test_yosql_id) VALUES ('1', 'I', '2');"
    },
    "rows": [
      {
        "H": "I",
        "test_yosql_id": 2,
        "yosql_id": 1
      }
    ]
  },
  "test_BJ": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "K": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_BJ` (yosql_id INTEGER PRIMARY KEY UNIQUE, `K` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_BJ (yosql_id, K, test_yosql_id) VALUES ('1', 'L', '2');"
    },
    "rows": [
      {
        "K": "L",
        "test_yosql_id": 2,
        "yosql_id": 1
      }
    ]
  },
  "test_BR": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "S": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_BR` (yosql_id INTEGER PRIMARY KEY UNIQUE, `S` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_BR (yosql_id, S, test_yosql_id) VALUES ('1', 'T', '2');"
    },
    "rows": [
      {
        "S": "T",
        "test_yosql_id": 2,
        "yosql_id": 1
      }
    ]
  },
  "test_BU": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 1
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_BU` (yosql_id INTEGER PRIMARY KEY UNIQUE, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_BU (yosql_id, test_yosql_id) VALUES ('1', '2');"
    },
    "rows": [
      {
        "test_yosql_id": 2,
        "yosql_id": 1
      }
    ]
  },
  "test_BU_V": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "V": {
        "type": "TEXT",
        "order": 1
      },
      "test_BU_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 3,
    "queries": {
      "create": "CREATE TABLE `test_BU_V` (yosql_id INTEGER PRIMARY KEY UNIQUE, `V` TEXT, `test_BU_yosql_id` TEXT);",
      "insert": "INSERT INTO test_BU_V (yosql_id, V, test_BU_yosql_id) VALUES ('1', 'P', '1'), ('2', 'Q', '1'), ('3', 'R', '1');"
    },
    "rows": [
      {
        "V": "P",
        "test_BU_yosql_id": 1,
        "yosql_id": 1
      },
      {
        "V": "Q",
        "test_BU_yosql_id": 1,
        "yosql_id": 2
      },
      {
        "V": "R",
        "test_BU_yosql_id": 1,
        "yosql_id": 3
      }
    ]
  },
  "test_BX": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "BX": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 2,
    "queries": {
      "create": "CREATE TABLE `test_BX` (yosql_id INTEGER PRIMARY KEY UNIQUE, `BX` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_BX (yosql_id, BX, test_yosql_id) VALUES ('1', 'Y', '2'), ('2', 'Z', '2');"
    },
    "rows": [
      {
        "BX": "Y",
        "test_yosql_id": 2,
        "yosql_id": 1
      },
      {
        "BX": "Z",
        "test_yosql_id": 2,
        "yosql_id": 2
      }
    ]
  },
  "test_CC": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "CC": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 3,
    "queries": {
      "create": "CREATE TABLE `test_CC` (yosql_id INTEGER PRIMARY KEY UNIQUE, `CC` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_CC (yosql_id, CC, test_yosql_id) VALUES ('1', 'D', '3'), ('2', 'E', '3'), ('3', 'F', '3');"
    },
    "rows": [
      {
        "CC": "D",
        "test_yosql_id": 3,
        "yosql_id": 1
      },
      {
        "CC": "E",
        "test_yosql_id": 3,
        "yosql_id": 2
      },
      {
        "CC": "F",
        "test_yosql_id": 3,
        "yosql_id": 3
      }
    ]
  },
  "test_CG": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "H": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_CG` (yosql_id INTEGER PRIMARY KEY UNIQUE, `H` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_CG (yosql_id, H, test_yosql_id) VALUES ('1', 'I', '3');"
    },
    "rows": [
      {
        "H": "I",
        "test_yosql_id": 3,
        "yosql_id": 1
      }
    ]
  },
  "test_CJ": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "K": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_CJ` (yosql_id INTEGER PRIMARY KEY UNIQUE, `K` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_CJ (yosql_id, K, test_yosql_id) VALUES ('1', 'L', '3');"
    },
    "rows": [
      {
        "K": "L",
        "test_yosql_id": 3,
        "yosql_id": 1
      }
    ]
  },
  "test_CR": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "S": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_CR` (yosql_id INTEGER PRIMARY KEY UNIQUE, `S` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_CR (yosql_id, S, test_yosql_id) VALUES ('1', 'T', '3');"
    },
    "rows": [
      {
        "S": "T",
        "test_yosql_id": 3,
        "yosql_id": 1
      }
    ]
  },
  "test_CU": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 1
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_CU` (yosql_id INTEGER PRIMARY KEY UNIQUE, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_CU (yosql_id, test_yosql_id) VALUES ('1', '3');"
    },
    "rows": [
      {
        "test_yosql_id": 3,
        "yosql_id": 1
      }
    ]
  },
  "test_CU_V": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "V": {
        "type": "TEXT",
        "order": 1
      },
      "test_CU_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 3,
    "queries": {
      "create": "CREATE TABLE `test_CU_V` (yosql_id INTEGER PRIMARY KEY UNIQUE, `V` TEXT, `test_CU_yosql_id` TEXT);",
      "insert": "INSERT INTO test_CU_V (yosql_id, V, test_CU_yosql_id) VALUES ('1', 'P', '1'), ('2', 'Q', '1'), ('3', 'R', '1');"
    },
    "rows": [
      {
        "V": "P",
        "test_CU_yosql_id": 1,
        "yosql_id": 1
      },
      {
        "V": "Q",
        "test_CU_yosql_id": 1,
        "yosql_id": 2
      },
      {
        "V": "R",
        "test_CU_yosql_id": 1,
        "yosql_id": 3
      }
    ]
  },
  "test_CX": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "CX": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 2,
    "queries": {
      "create": "CREATE TABLE `test_CX` (yosql_id INTEGER PRIMARY KEY UNIQUE, `CX` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_CX (yosql_id, CX, test_yosql_id) VALUES ('1', 'Y', '3'), ('2', 'Z', '3');"
    },
    "rows": [
      {
        "CX": "Y",
        "test_yosql_id": 3,
        "yosql_id": 1
      },
      {
        "CX": "Z",
        "test_yosql_id": 3,
        "yosql_id": 2
      }
    ]
  },
  "test_DC": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "DC": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 3,
    "queries": {
      "create": "CREATE TABLE `test_DC` (yosql_id INTEGER PRIMARY KEY UNIQUE, `DC` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_DC (yosql_id, DC, test_yosql_id) VALUES ('1', 'D', '4'), ('2', 'E', '4'), ('3', 'F', '4');"
    },
    "rows": [
      {
        "DC": "D",
        "test_yosql_id": 4,
        "yosql_id": 1
      },
      {
        "DC": "E",
        "test_yosql_id": 4,
        "yosql_id": 2
      },
      {
        "DC": "F",
        "test_yosql_id": 4,
        "yosql_id": 3
      }
    ]
  },
  "test_DG": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "H": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_DG` (yosql_id INTEGER PRIMARY KEY UNIQUE, `H` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_DG (yosql_id, H, test_yosql_id) VALUES ('1', 'I', '4');"
    },
    "rows": [
      {
        "H": "I",
        "test_yosql_id": 4,
        "yosql_id": 1
      }
    ]
  },
  "test_DJ": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "K": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_DJ` (yosql_id INTEGER PRIMARY KEY UNIQUE, `K` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_DJ (yosql_id, K, test_yosql_id) VALUES ('1', 'L', '4');"
    },
    "rows": [
      {
        "K": "L",
        "test_yosql_id": 4,
        "yosql_id": 1
      }
    ]
  },
  "test_DR": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "S": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_DR` (yosql_id INTEGER PRIMARY KEY UNIQUE, `S` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_DR (yosql_id, S, test_yosql_id) VALUES ('1', 'T', '4');"
    },
    "rows": [
      {
        "S": "T",
        "test_yosql_id": 4,
        "yosql_id": 1
      }
    ]
  },
  "test_DU": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 1
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_DU` (yosql_id INTEGER PRIMARY KEY UNIQUE, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_DU (yosql_id, test_yosql_id) VALUES ('1', '4');"
    },
    "rows": [
      {
        "test_yosql_id": 4,
        "yosql_id": 1
      }
    ]
  },
  "test_DU_V": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "V": {
        "type": "TEXT",
        "order": 1
      },
      "test_DU_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 3,
    "queries": {
      "create": "CREATE TABLE `test_DU_V` (yosql_id INTEGER PRIMARY KEY UNIQUE, `V` TEXT, `test_DU_yosql_id` TEXT);",
      "insert": "INSERT INTO test_DU_V (yosql_id, V, test_DU_yosql_id) VALUES ('1', 'P', '1'), ('2', 'Q', '1'), ('3', 'R', '1');"
    },
    "rows": [
      {
        "V": "P",
        "test_DU_yosql_id": 1,
        "yosql_id": 1
      },
      {
        "V": "Q",
        "test_DU_yosql_id": 1,
        "yosql_id": 2
      },
      {
        "V": "R",
        "test_DU_yosql_id": 1,
        "yosql_id": 3
      }
    ]
  },
  "test_DX": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "DX": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 2,
    "queries": {
      "create": "CREATE TABLE `test_DX` (yosql_id INTEGER PRIMARY KEY UNIQUE, `DX` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_DX (yosql_id, DX, test_yosql_id) VALUES ('1', 'Y', '4'), ('2', 'Z', '4');"
    },
    "rows": [
      {
        "DX": "Y",
        "test_yosql_id": 4,
        "yosql_id": 1
      },
      {
        "DX": "Z",
        "test_yosql_id": 4,
        "yosql_id": 2
      }
    ]
  },
  "test_EC": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "EC": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 3,
    "queries": {
      "create": "CREATE TABLE `test_EC` (yosql_id INTEGER PRIMARY KEY UNIQUE, `EC` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_EC (yosql_id, EC, test_yosql_id) VALUES ('1', 'D', '5'), ('2', 'E', '5'), ('3', 'F', '5');"
    },
    "rows": [
      {
        "EC": "D",
        "test_yosql_id": 5,
        "yosql_id": 1
      },
      {
        "EC": "E",
        "test_yosql_id": 5,
        "yosql_id": 2
      },
      {
        "EC": "F",
        "test_yosql_id": 5,
        "yosql_id": 3
      }
    ]
  },
  "test_EG": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "H": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_EG` (yosql_id INTEGER PRIMARY KEY UNIQUE, `H` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_EG (yosql_id, H, test_yosql_id) VALUES ('1', 'I', '5');"
    },
    "rows": [
      {
        "H": "I",
        "test_yosql_id": 5,
        "yosql_id": 1
      }
    ]
  },
  "test_EJ": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "K": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_EJ` (yosql_id INTEGER PRIMARY KEY UNIQUE, `K` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_EJ (yosql_id, K, test_yosql_id) VALUES ('1', 'L', '5');"
    },
    "rows": [
      {
        "K": "L",
        "test_yosql_id": 5,
        "yosql_id": 1
      }
    ]
  },
  "test_ER": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "S": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_ER` (yosql_id INTEGER PRIMARY KEY UNIQUE, `S` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_ER (yosql_id, S, test_yosql_id) VALUES ('1', 'T', '5');"
    },
    "rows": [
      {
        "S": "T",
        "test_yosql_id": 5,
        "yosql_id": 1
      }
    ]
  },
  "test_EU": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 1
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_EU` (yosql_id INTEGER PRIMARY KEY UNIQUE, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_EU (yosql_id, test_yosql_id) VALUES ('1', '5');"
    },
    "rows": [
      {
        "test_yosql_id": 5,
        "yosql_id": 1
      }
    ]
  },
  "test_EU_V": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "V": {
        "type": "TEXT",
        "order": 1
      },
      "test_EU_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 3,
    "queries": {
      "create": "CREATE TABLE `test_EU_V` (yosql_id INTEGER PRIMARY KEY UNIQUE, `V` TEXT, `test_EU_yosql_id` TEXT);",
      "insert": "INSERT INTO test_EU_V (yosql_id, V, test_EU_yosql_id) VALUES ('1', 'P', '1'), ('2', 'Q', '1'), ('3', 'R', '1');"
    },
    "rows": [
      {
        "V": "P",
        "test_EU_yosql_id": 1,
        "yosql_id": 1
      },
      {
        "V": "Q",
        "test_EU_yosql_id": 1,
        "yosql_id": 2
      },
      {
        "V": "R",
        "test_EU_yosql_id": 1,
        "yosql_id": 3
      }
    ]
  },
  "test_EX": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "EX": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 2,
    "queries": {
      "create": "CREATE TABLE `test_EX` (yosql_id INTEGER PRIMARY KEY UNIQUE, `EX` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_EX (yosql_id, EX, test_yosql_id) VALUES ('1', 'Y', '5'), ('2', 'Z', '5');"
    },
    "rows": [
      {
        "EX": "Y",
        "test_yosql_id": 5,
        "yosql_id": 1
      },
      {
        "EX": "Z",
        "test_yosql_id": 5,
        "yosql_id": 2
      }
    ]
  },
  "test_FC": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "FC": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 3,
    "queries": {
      "create": "CREATE TABLE `test_FC` (yosql_id INTEGER PRIMARY KEY UNIQUE, `FC` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_FC (yosql_id, FC, test_yosql_id) VALUES ('1', 'D', '6'), ('2', 'E', '6'), ('3', 'F', '6');"
    },
    "rows": [
      {
        "FC": "D",
        "test_yosql_id": 6,
        "yosql_id": 1
      },
      {
        "FC": "E",
        "test_yosql_id": 6,
        "yosql_id": 2
      },
      {
        "FC": "F",
        "test_yosql_id": 6,
        "yosql_id": 3
      }
    ]
  },
  "test_FG": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "H": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_FG` (yosql_id INTEGER PRIMARY KEY UNIQUE, `H` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_FG (yosql_id, H, test_yosql_id) VALUES ('1', 'I', '6');"
    },
    "rows": [
      {
        "H": "I",
        "test_yosql_id": 6,
        "yosql_id": 1
      }
    ]
  },
  "test_FJ": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "K": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_FJ` (yosql_id INTEGER PRIMARY KEY UNIQUE, `K` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_FJ (yosql_id, K, test_yosql_id) VALUES ('1', 'L', '6');"
    },
    "rows": [
      {
        "K": "L",
        "test_yosql_id": 6,
        "yosql_id": 1
      }
    ]
  },
  "test_FR": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "S": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_FR` (yosql_id INTEGER PRIMARY KEY UNIQUE, `S` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_FR (yosql_id, S, test_yosql_id) VALUES ('1', 'T', '6');"
    },
    "rows": [
      {
        "S": "T",
        "test_yosql_id": 6,
        "yosql_id": 1
      }
    ]
  },
  "test_FU": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 1
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_FU` (yosql_id INTEGER PRIMARY KEY UNIQUE, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_FU (yosql_id, test_yosql_id) VALUES ('1', '6');"
    },
    "rows": [
      {
        "test_yosql_id": 6,
        "yosql_id": 1
      }
    ]
  },
  "test_FU_V": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "V": {
        "type": "TEXT",
        "order": 1
      },
      "test_FU_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 3,
    "queries": {
      "create": "CREATE TABLE `test_FU_V` (yosql_id INTEGER PRIMARY KEY UNIQUE, `V` TEXT, `test_FU_yosql_id` TEXT);",
      "insert": "INSERT INTO test_FU_V (yosql_id, V, test_FU_yosql_id) VALUES ('1', 'P', '1'), ('2', 'Q', '1'), ('3', 'R', '1');"
    },
    "rows": [
      {
        "V": "P",
        "test_FU_yosql_id": 1,
        "yosql_id": 1
      },
      {
        "V": "Q",
        "test_FU_yosql_id": 1,
        "yosql_id": 2
      },
      {
        "V": "R",
        "test_FU_yosql_id": 1,
        "yosql_id": 3
      }
    ]
  },
  "test_FX": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "FX": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 2,
    "queries": {
      "create": "CREATE TABLE `test_FX` (yosql_id INTEGER PRIMARY KEY UNIQUE, `FX` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_FX (yosql_id, FX, test_yosql_id) VALUES ('1', 'Y', '6'), ('2', 'Z', '6');"
    },
    "rows": [
      {
        "FX": "Y",
        "test_yosql_id": 6,
        "yosql_id": 1
      },
      {
        "FX": "Z",
        "test_yosql_id": 6,
        "yosql_id": 2
      }
    ]
  },
  "test_GC": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "GC": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 3,
    "queries": {
      "create": "CREATE TABLE `test_GC` (yosql_id INTEGER PRIMARY KEY UNIQUE, `GC` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_GC (yosql_id, GC, test_yosql_id) VALUES ('1', 'D', '7'), ('2', 'E', '7'), ('3', 'F', '7');"
    },
    "rows": [
      {
        "GC": "D",
        "test_yosql_id": 7,
        "yosql_id": 1
      },
      {
        "GC": "E",
        "test_yosql_id": 7,
        "yosql_id": 2
      },
      {
        "GC": "F",
        "test_yosql_id": 7,
        "yosql_id": 3
      }
    ]
  },
  "test_GG": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "H": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_GG` (yosql_id INTEGER PRIMARY KEY UNIQUE, `H` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_GG (yosql_id, H, test_yosql_id) VALUES ('1', 'I', '7');"
    },
    "rows": [
      {
        "H": "I",
        "test_yosql_id": 7,
        "yosql_id": 1
      }
    ]
  },
  "test_GJ": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "K": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_GJ` (yosql_id INTEGER PRIMARY KEY UNIQUE, `K` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_GJ (yosql_id, K, test_yosql_id) VALUES ('1', 'L', '7');"
    },
    "rows": [
      {
        "K": "L",
        "test_yosql_id": 7,
        "yosql_id": 1
      }
    ]
  },
  "test_GR": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "S": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_GR` (yosql_id INTEGER PRIMARY KEY UNIQUE, `S` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_GR (yosql_id, S, test_yosql_id) VALUES ('1', 'T', '7');"
    },
    "rows": [
      {
        "S": "T",
        "test_yosql_id": 7,
        "yosql_id": 1
      }
    ]
  },
  "test_GU": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 1
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_GU` (yosql_id INTEGER PRIMARY KEY UNIQUE, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_GU (yosql_id, test_yosql_id) VALUES ('1', '7');"
    },
    "rows": [
      {
        "test_yosql_id": 7,
        "yosql_id": 1
      }
    ]
  },
  "test_GU_V": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "V": {
        "type": "TEXT",
        "order": 1
      },
      "test_GU_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 3,
    "queries": {
      "create": "CREATE TABLE `test_GU_V` (yosql_id INTEGER PRIMARY KEY UNIQUE, `V` TEXT, `test_GU_yosql_id` TEXT);",
      "insert": "INSERT INTO test_GU_V (yosql_id, V, test_GU_yosql_id) VALUES ('1', 'P', '1'), ('2', 'Q', '1'), ('3', 'R', '1');"
    },
    "rows": [
      {
        "V": "P",
        "test_GU_yosql_id": 1,
        "yosql_id": 1
      },
      {
        "V": "Q",
        "test_GU_yosql_id": 1,
        "yosql_id": 2
      },
      {
        "V": "R",
        "test_GU_yosql_id": 1,
        "yosql_id": 3
      }
    ]
  },
  "test_GX": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "GX": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 2,
    "queries": {
      "create": "CREATE TABLE `test_GX` (yosql_id INTEGER PRIMARY KEY UNIQUE, `GX` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_GX (yosql_id, GX, test_yosql_id) VALUES ('1', 'Y', '7'), ('2', 'Z', '7');"
    },
    "rows": [
      {
        "GX": "Y",
        "test_yosql_id": 7,
        "yosql_id": 1
      },
      {
        "GX": "Z",
        "test_yosql_id": 7,
        "yosql_id": 2
      }
    ]
  },
  "test_HC": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "HC": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 3,
    "queries": {
      "create": "CREATE TABLE `test_HC` (yosql_id INTEGER PRIMARY KEY UNIQUE, `HC` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_HC (yosql_id, HC, test_yosql_id) VALUES ('1', 'D', '8'), ('2', 'E', '8'), ('3', 'F', '8');"
    },
    "rows": [
      {
        "HC": "D",
        "test_yosql_id": 8,
        "yosql_id": 1
      },
      {
        "HC": "E",
        "test_yosql_id": 8,
        "yosql_id": 2
      },
      {
        "HC": "F",
        "test_yosql_id": 8,
        "yosql_id": 3
      }
    ]
  },
  "test_HG": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "H": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_HG` (yosql_id INTEGER PRIMARY KEY UNIQUE, `H` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_HG (yosql_id, H, test_yosql_id) VALUES ('1', 'I', '8');"
    },
    "rows": [
      {
        "H": "I",
        "test_yosql_id": 8,
        "yosql_id": 1
      }
    ]
  },
  "test_HJ": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "K": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_HJ` (yosql_id INTEGER PRIMARY KEY UNIQUE, `K` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_HJ (yosql_id, K, test_yosql_id) VALUES ('1', 'L', '8');"
    },
    "rows": [
      {
        "K": "L",
        "test_yosql_id": 8,
        "yosql_id": 1
      }
    ]
  },
  "test_HR": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "S": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_HR` (yosql_id INTEGER PRIMARY KEY UNIQUE, `S` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_HR (yosql_id, S, test_yosql_id) VALUES ('1', 'T', '8');"
    },
    "rows": [
      {
        "S": "T",
        "test_yosql_id": 8,
        "yosql_id": 1
      }
    ]
  },
  "test_HU": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 1
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_HU` (yosql_id INTEGER PRIMARY KEY UNIQUE, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_HU (yosql_id, test_yosql_id) VALUES ('1', '8');"
    },
    "rows": [
      {
        "test_yosql_id": 8,
        "yosql_id": 1
      }
    ]
  },
  "test_HU_V": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "V": {
        "type": "TEXT",
        "order": 1
      },
      "test_HU_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 3,
    "queries": {
      "create": "CREATE TABLE `test_HU_V` (yosql_id INTEGER PRIMARY KEY UNIQUE, `V` TEXT, `test_HU_yosql_id` TEXT);",
      "insert": "INSERT INTO test_HU_V (yosql_id, V, test_HU_yosql_id) VALUES ('1', 'P', '1'), ('2', 'Q', '1'), ('3', 'R', '1');"
    },
    "rows": [
      {
        "V": "P",
        "test_HU_yosql_id": 1,
        "yosql_id": 1
      },
      {
        "V": "Q",
        "test_HU_yosql_id": 1,
        "yosql_id": 2
      },
      {
        "V": "R",
        "test_HU_yosql_id": 1,
        "yosql_id": 3
      }
    ]
  },
  "test_HX": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "HX": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 2,
    "queries": {
      "create": "CREATE TABLE `test_HX` (yosql_id INTEGER PRIMARY KEY UNIQUE, `HX` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_HX (yosql_id, HX, test_yosql_id) VALUES ('1', 'Y', '8'), ('2', 'Z', '8');"
    },
    "rows": [
      {
        "HX": "Y",
        "test_yosql_id": 8,
        "yosql_id": 1
      },
      {
        "HX": "Z",
        "test_yosql_id": 8,
        "yosql_id": 2
      }
    ]
  },
  "test_IC": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "IC": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 3,
    "queries": {
      "create": "CREATE TABLE `test_IC` (yosql_id INTEGER PRIMARY KEY UNIQUE, `IC` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_IC (yosql_id, IC, test_yosql_id) VALUES ('1', 'D', '9'), ('2', 'E', '9'), ('3', 'F', '9');"
    },
    "rows": [
      {
        "IC": "D",
        "test_yosql_id": 9,
        "yosql_id": 1
      },
      {
        "IC": "E",
        "test_yosql_id": 9,
        "yosql_id": 2
      },
      {
        "IC": "F",
        "test_yosql_id": 9,
        "yosql_id": 3
      }
    ]
  },
  "test_IG": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "H": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_IG` (yosql_id INTEGER PRIMARY KEY UNIQUE, `H` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_IG (yosql_id, H, test_yosql_id) VALUES ('1', 'I', '9');"
    },
    "rows": [
      {
        "H": "I",
        "test_yosql_id": 9,
        "yosql_id": 1
      }
    ]
  },
  "test_IJ": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "K": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_IJ` (yosql_id INTEGER PRIMARY KEY UNIQUE, `K` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_IJ (yosql_id, K, test_yosql_id) VALUES ('1', 'L', '9');"
    },
    "rows": [
      {
        "K": "L",
        "test_yosql_id": 9,
        "yosql_id": 1
      }
    ]
  },
  "test_IR": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "S": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_IR` (yosql_id INTEGER PRIMARY KEY UNIQUE, `S` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_IR (yosql_id, S, test_yosql_id) VALUES ('1', 'T', '9');"
    },
    "rows": [
      {
        "S": "T",
        "test_yosql_id": 9,
        "yosql_id": 1
      }
    ]
  },
  "test_IU": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 1
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_IU` (yosql_id INTEGER PRIMARY KEY UNIQUE, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_IU (yosql_id, test_yosql_id) VALUES ('1', '9');"
    },
    "rows": [
      {
        "test_yosql_id": 9,
        "yosql_id": 1
      }
    ]
  },
  "test_IU_V": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "V": {
        "type": "TEXT",
        "order": 1
      },
      "test_IU_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 3,
    "queries": {
      "create": "CREATE TABLE `test_IU_V` (yosql_id INTEGER PRIMARY KEY UNIQUE, `V` TEXT, `test_IU_yosql_id` TEXT);",
      "insert": "INSERT INTO test_IU_V (yosql_id, V, test_IU_yosql_id) VALUES ('1', 'P', '1'), ('2', 'Q', '1'), ('3', 'R', '1');"
    },
    "rows": [
      {
        "V": "P",
        "test_IU_yosql_id": 1,
        "yosql_id": 1
      },
      {
        "V": "Q",
        "test_IU_yosql_id": 1,
        "yosql_id": 2
      },
      {
        "V": "R",
        "test_IU_yosql_id": 1,
        "yosql_id": 3
      }
    ]
  },
  "test_IX": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "IX": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 2,
    "queries": {
      "create": "CREATE TABLE `test_IX` (yosql_id INTEGER PRIMARY KEY UNIQUE, `IX` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_IX (yosql_id, IX, test_yosql_id) VALUES ('1', 'Y', '9'), ('2', 'Z', '9');"
    },
    "rows": [
      {
        "IX": "Y",
        "test_yosql_id": 9,
        "yosql_id": 1
      },
      {
        "IX": "Z",
        "test_yosql_id": 9,
        "yosql_id": 2
      }
    ]
  },
  "test_JC": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "JC": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 3,
    "queries": {
      "create": "CREATE TABLE `test_JC` (yosql_id INTEGER PRIMARY KEY UNIQUE, `JC` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_JC (yosql_id, JC, test_yosql_id) VALUES ('1', 'D', '10'), ('2', 'E', '10'), ('3', 'F', '10');"
    },
    "rows": [
      {
        "JC": "D",
        "test_yosql_id": 10,
        "yosql_id": 1
      },
      {
        "JC": "E",
        "test_yosql_id": 10,
        "yosql_id": 2
      },
      {
        "JC": "F",
        "test_yosql_id": 10,
        "yosql_id": 3
      }
    ]
  },
  "test_JG": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "H": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_JG` (yosql_id INTEGER PRIMARY KEY UNIQUE, `H` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_JG (yosql_id, H, test_yosql_id) VALUES ('1', 'I', '10');"
    },
    "rows": [
      {
        "H": "I",
        "test_yosql_id": 10,
        "yosql_id": 1
      }
    ]
  },
  "test_JJ": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "K": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_JJ` (yosql_id INTEGER PRIMARY KEY UNIQUE, `K` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_JJ (yosql_id, K, test_yosql_id) VALUES ('1', 'L', '10');"
    },
    "rows": [
      {
        "K": "L",
        "test_yosql_id": 10,
        "yosql_id": 1
      }
    ]
  },
  "test_JR": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "S": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_JR` (yosql_id INTEGER PRIMARY KEY UNIQUE, `S` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_JR (yosql_id, S, test_yosql_id) VALUES ('1', 'T', '10');"
    },
    "rows": [
      {
        "S": "T",
        "test_yosql_id": 10,
        "yosql_id": 1
      }
    ]
  },
  "test_JU": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 1
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_JU` (yosql_id INTEGER PRIMARY KEY UNIQUE, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_JU (yosql_id, test_yosql_id) VALUES ('1', '10');"
    },
    "rows": [
      {
        "test_yosql_id": 10,
        "yosql_id": 1
      }
    ]
  },
  "test_JU_V": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "V": {
        "type": "TEXT",
        "order": 1
      },
      "test_JU_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 3,
    "queries": {
      "create": "CREATE TABLE `test_JU_V` (yosql_id INTEGER PRIMARY KEY UNIQUE, `V` TEXT, `test_JU_yosql_id` TEXT);",
      "insert": "INSERT INTO test_JU_V (yosql_id, V, test_JU_yosql_id) VALUES ('1', 'P', '1'), ('2', 'Q', '1'), ('3', 'R', '1');"
    },
    "rows": [
      {
        "V": "P",
        "test_JU_yosql_id": 1,
        "yosql_id": 1
      },
      {
        "V": "Q",
        "test_JU_yosql_id": 1,
        "yosql_id": 2
      },
      {
        "V": "R",
        "test_JU_yosql_id": 1,
        "yosql_id": 3
      }
    ]
  },
  "test_JX": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "JX": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 2,
    "queries": {
      "create": "CREATE TABLE `test_JX` (yosql_id INTEGER PRIMARY KEY UNIQUE, `JX` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_JX (yosql_id, JX, test_yosql_id) VALUES ('1', 'Y', '10'), ('2', 'Z', '10');"
    },
    "rows": [
      {
        "JX": "Y",
        "test_yosql_id": 10,
        "yosql_id": 1
      },
      {
        "JX": "Z",
        "test_yosql_id": 10,
        "yosql_id": 2
      }
    ]
  },
  "test_KC": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "KC": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 3,
    "queries": {
      "create": "CREATE TABLE `test_KC` (yosql_id INTEGER PRIMARY KEY UNIQUE, `KC` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_KC (yosql_id, KC, test_yosql_id) VALUES ('1', 'D', '11'), ('2', 'E', '11'), ('3', 'F', '11');"
    },
    "rows": [
      {
        "KC": "D",
        "test_yosql_id": 11,
        "yosql_id": 1
      },
      {
        "KC": "E",
        "test_yosql_id": 11,
        "yosql_id": 2
      },
      {
        "KC": "F",
        "test_yosql_id": 11,
        "yosql_id": 3
      }
    ]
  },
  "test_KG": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "H": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_KG` (yosql_id INTEGER PRIMARY KEY UNIQUE, `H` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_KG (yosql_id, H, test_yosql_id) VALUES ('1', 'I', '11');"
    },
    "rows": [
      {
        "H": "I",
        "test_yosql_id": 11,
        "yosql_id": 1
      }
    ]
  },
  "test_KJ": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "K": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_KJ` (yosql_id INTEGER PRIMARY KEY UNIQUE, `K` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_KJ (yosql_id, K, test_yosql_id) VALUES ('1', 'L', '11');"
    },
    "rows": [
      {
        "K": "L",
        "test_yosql_id": 11,
        "yosql_id": 1
      }
    ]
  },
  "test_KR": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "S": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_KR` (yosql_id INTEGER PRIMARY KEY UNIQUE, `S` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_KR (yosql_id, S, test_yosql_id) VALUES ('1', 'T', '11');"
    },
    "rows": [
      {
        "S": "T",
        "test_yosql_id": 11,
        "yosql_id": 1
      }
    ]
  },
  "test_KU": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 1
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_KU` (yosql_id INTEGER PRIMARY KEY UNIQUE, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_KU (yosql_id, test_yosql_id) VALUES ('1', '11');"
    },
    "rows": [
      {
        "test_yosql_id": 11,
        "yosql_id": 1
      }
    ]
  },
  "test_KU_V": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "V": {
        "type": "TEXT",
        "order": 1
      },
      "test_KU_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 3,
    "queries": {
      "create": "CREATE TABLE `test_KU_V` (yosql_id INTEGER PRIMARY KEY UNIQUE, `V` TEXT, `test_KU_yosql_id` TEXT);",
      "insert": "INSERT INTO test_KU_V (yosql_id, V, test_KU_yosql_id) VALUES ('1', 'P', '1'), ('2', 'Q', '1'), ('3', 'R', '1');"
    },
    "rows": [
      {
        "V": "P",
        "test_KU_yosql_id": 1,
        "yosql_id": 1
      },
      {
        "V": "Q",
        "test_KU_yosql_id": 1,
        "yosql_id": 2
      },
      {
        "V": "R",
        "test_KU_yosql_id": 1,
        "yosql_id": 3
      }
    ]
  },
  "test_KX": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "KX": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 2,
    "queries": {
      "create": "CREATE TABLE `test_KX` (yosql_id INTEGER PRIMARY KEY UNIQUE, `KX` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_KX (yosql_id, KX, test_yosql_id) VALUES ('1', 'Y', '11'), ('2', 'Z', '11');"
    },
    "rows": [
      {
        "KX": "Y",
        "test_yosql_id": 11,
        "yosql_id": 1
      },
      {
        "KX": "Z",
        "test_yosql_id": 11,
        "yosql_id": 2
      }
    ]
  },
  "test_LC": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "LC": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 3,
    "queries": {
      "create": "CREATE TABLE `test_LC` (yosql_id INTEGER PRIMARY KEY UNIQUE, `LC` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_LC (yosql_id, LC, test_yosql_id) VALUES ('1', 'D', '12'), ('2', 'E', '12'), ('3', 'F', '12');"
    },
    "rows": [
      {
        "LC": "D",
        "test_yosql_id": 12,
        "yosql_id": 1
      },
      {
        "LC": "E",
        "test_yosql_id": 12,
        "yosql_id": 2
      },
      {
        "LC": "F",
        "test_yosql_id": 12,
        "yosql_id": 3
      }
    ]
  },
  "test_LG": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "H": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_LG` (yosql_id INTEGER PRIMARY KEY UNIQUE, `H` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_LG (yosql_id, H, test_yosql_id) VALUES ('1', 'I', '12');"
    },
    "rows": [
      {
        "H": "I",
        "test_yosql_id": 12,
        "yosql_id": 1
      }
    ]
  },
  "test_LJ": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "K": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_LJ` (yosql_id INTEGER PRIMARY KEY UNIQUE, `K` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_LJ (yosql_id, K, test_yosql_id) VALUES ('1', 'L', '12');"
    },
    "rows": [
      {
        "K": "L",
        "test_yosql_id": 12,
        "yosql_id": 1
      }
    ]
  },
  "test_LR": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "S": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_LR` (yosql_id INTEGER PRIMARY KEY UNIQUE, `S` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_LR (yosql_id, S, test_yosql_id) VALUES ('1', 'T', '12');"
    },
    "rows": [
      {
        "S": "T",
        "test_yosql_id": 12,
        "yosql_id": 1
      }
    ]
  },
  "test_LU": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 1
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_LU` (yosql_id INTEGER PRIMARY KEY UNIQUE, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_LU (yosql_id, test_yosql_id) VALUES ('1', '12');"
    },
    "rows": [
      {
        "test_yosql_id": 12,
        "yosql_id": 1
      }
    ]
  },
  "test_LU_V": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "V": {
        "type": "TEXT",
        "order": 1
      },
      "test_LU_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 3,
    "queries": {
      "create": "CREATE TABLE `test_LU_V` (yosql_id INTEGER PRIMARY KEY UNIQUE, `V` TEXT, `test_LU_yosql_id` TEXT);",
      "insert": "INSERT INTO test_LU_V (yosql_id, V, test_LU_yosql_id) VALUES ('1', 'P', '1'), ('2', 'Q', '1'), ('3', 'R', '1');"
    },
    "rows": [
      {
        "V": "P",
        "test_LU_yosql_id": 1,
        "yosql_id": 1
      },
      {
        "V": "Q",
        "test_LU_yosql_id": 1,
        "yosql_id": 2
      },
      {
        "V": "R",
        "test_LU_yosql_id": 1,
        "yosql_id": 3
      }
    ]
  },
  "test_LX": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "LX": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 2,
    "queries": {
      "create": "CREATE TABLE `test_LX` (yosql_id INTEGER PRIMARY KEY UNIQUE, `LX` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_LX (yosql_id, LX, test_yosql_id) VALUES ('1', 'Y', '12'), ('2', 'Z', '12');"
    },
    "rows": [
      {
        "LX": "Y",
        "test_yosql_id": 12,
        "yosql_id": 1
      },
      {
        "LX": "Z",
        "test_yosql_id": 12,
        "yosql_id": 2
      }
    ]
  },
  "test_MC": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "MC": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 3,
    "queries": {
      "create": "CREATE TABLE `test_MC` (yosql_id INTEGER PRIMARY KEY UNIQUE, `MC` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_MC (yosql_id, MC, test_yosql_id) VALUES ('1', 'D', '13'), ('2', 'E', '13'), ('3', 'F', '13');"
    },
    "rows": [
      {
        "MC": "D",
        "test_yosql_id": 13,
        "yosql_id": 1
      },
      {
        "MC": "E",
        "test_yosql_id": 13,
        "yosql_id": 2
      },
      {
        "MC": "F",
        "test_yosql_id": 13,
        "yosql_id": 3
      }
    ]
  },
  "test_MG": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "H": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_MG` (yosql_id INTEGER PRIMARY KEY UNIQUE, `H` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_MG (yosql_id, H, test_yosql_id) VALUES ('1', 'I', '13');"
    },
    "rows": [
      {
        "H": "I",
        "test_yosql_id": 13,
        "yosql_id": 1
      }
    ]
  },
  "test_MJ": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "K": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_MJ` (yosql_id INTEGER PRIMARY KEY UNIQUE, `K` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_MJ (yosql_id, K, test_yosql_id) VALUES ('1', 'L', '13');"
    },
    "rows": [
      {
        "K": "L",
        "test_yosql_id": 13,
        "yosql_id": 1
      }
    ]
  },
  "test_MR": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "S": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_MR` (yosql_id INTEGER PRIMARY KEY UNIQUE, `S` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_MR (yosql_id, S, test_yosql_id) VALUES ('1', 'T', '13');"
    },
    "rows": [
      {
        "S": "T",
        "test_yosql_id": 13,
        "yosql_id": 1
      }
    ]
  },
  "test_MU": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 1
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_MU` (yosql_id INTEGER PRIMARY KEY UNIQUE, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_MU (yosql_id, test_yosql_id) VALUES ('1', '13');"
    },
    "rows": [
      {
        "test_yosql_id": 13,
        "yosql_id": 1
      }
    ]
  },
  "test_MU_V": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "V": {
        "type": "TEXT",
        "order": 1
      },
      "test_MU_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 3,
    "queries": {
      "create": "CREATE TABLE `test_MU_V` (yosql_id INTEGER PRIMARY KEY UNIQUE, `V` TEXT, `test_MU_yosql_id` TEXT);",
      "insert": "INSERT INTO test_MU_V (yosql_id, V, test_MU_yosql_id) VALUES ('1', 'P', '1'), ('2', 'Q', '1'), ('3', 'R', '1');"
    },
    "rows": [
      {
        "V": "P",
        "test_MU_yosql_id": 1,
        "yosql_id": 1
      },
      {
        "V": "Q",
        "test_MU_yosql_id": 1,
        "yosql_id": 2
      },
      {
        "V": "R",
        "test_MU_yosql_id": 1,
        "yosql_id": 3
      }
    ]
  },
  "test_MX": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "MX": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 2,
    "queries": {
      "create": "CREATE TABLE `test_MX` (yosql_id INTEGER PRIMARY KEY UNIQUE, `MX` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_MX (yosql_id, MX, test_yosql_id) VALUES ('1', 'Y', '13'), ('2', 'Z', '13');"
    },
    "rows": [
      {
        "MX": "Y",
        "test_yosql_id": 13,
        "yosql_id": 1
      },
      {
        "MX": "Z",
        "test_yosql_id": 13,
        "yosql_id": 2
      }
    ]
  },
  "test_NC": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "NC": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 3,
    "queries": {
      "create": "CREATE TABLE `test_NC` (yosql_id INTEGER PRIMARY KEY UNIQUE, `NC` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_NC (yosql_id, NC, test_yosql_id) VALUES ('1', 'D', '14'), ('2', 'E', '14'), ('3', 'F', '14');"
    },
    "rows": [
      {
        "NC": "D",
        "test_yosql_id": 14,
        "yosql_id": 1
      },
      {
        "NC": "E",
        "test_yosql_id": 14,
        "yosql_id": 2
      },
      {
        "NC": "F",
        "test_yosql_id": 14,
        "yosql_id": 3
      }
    ]
  },
  "test_NG": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "H": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_NG` (yosql_id INTEGER PRIMARY KEY UNIQUE, `H` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_NG (yosql_id, H, test_yosql_id) VALUES ('1', 'I', '14');"
    },
    "rows": [
      {
        "H": "I",
        "test_yosql_id": 14,
        "yosql_id": 1
      }
    ]
  },
  "test_NJ": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "K": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_NJ` (yosql_id INTEGER PRIMARY KEY UNIQUE, `K` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_NJ (yosql_id, K, test_yosql_id) VALUES ('1', 'L', '14');"
    },
    "rows": [
      {
        "K": "L",
        "test_yosql_id": 14,
        "yosql_id": 1
      }
    ]
  },
  "test_NR": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "S": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_NR` (yosql_id INTEGER PRIMARY KEY UNIQUE, `S` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_NR (yosql_id, S, test_yosql_id) VALUES ('1', 'T', '14');"
    },
    "rows": [
      {
        "S": "T",
        "test_yosql_id": 14,
        "yosql_id": 1
      }
    ]
  },
  "test_NU": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 1
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_NU` (yosql_id INTEGER PRIMARY KEY UNIQUE, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_NU (yosql_id, test_yosql_id) VALUES ('1', '14');"
    },
    "rows": [
      {
        "test_yosql_id": 14,
        "yosql_id": 1
      }
    ]
  },
  "test_NU_V": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "V": {
        "type": "TEXT",
        "order": 1
      },
      "test_NU_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 3,
    "queries": {
      "create": "CREATE TABLE `test_NU_V` (yosql_id INTEGER PRIMARY KEY UNIQUE, `V` TEXT, `test_NU_yosql_id` TEXT);",
      "insert": "INSERT INTO test_NU_V (yosql_id, V, test_NU_yosql_id) VALUES ('1', 'P', '1'), ('2', 'Q', '1'), ('3', 'R', '1');"
    },
    "rows": [
      {
        "V": "P",
        "test_NU_yosql_id": 1,
        "yosql_id": 1
      },
      {
        "V": "Q",
        "test_NU_yosql_id": 1,
        "yosql_id": 2
      },
      {
        "V": "R",
        "test_NU_yosql_id": 1,
        "yosql_id": 3
      }
    ]
  },
  "test_NX": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "NX": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 2,
    "queries": {
      "create": "CREATE TABLE `test_NX` (yosql_id INTEGER PRIMARY KEY UNIQUE, `NX` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_NX (yosql_id, NX, test_yosql_id) VALUES ('1', 'Y', '14'), ('2', 'Z', '14');"
    },
    "rows": [
      {
        "NX": "Y",
        "test_yosql_id": 14,
        "yosql_id": 1
      },
      {
        "NX": "Z",
        "test_yosql_id": 14,
        "yosql_id": 2
      }
    ]
  },
  "test_OC": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "OC": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 3,
    "queries": {
      "create": "CREATE TABLE `test_OC` (yosql_id INTEGER PRIMARY KEY UNIQUE, `OC` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_OC (yosql_id, OC, test_yosql_id) VALUES ('1', 'D', '15'), ('2', 'E', '15'), ('3', 'F', '15');"
    },
    "rows": [
      {
        "OC": "D",
        "test_yosql_id": 15,
        "yosql_id": 1
      },
      {
        "OC": "E",
        "test_yosql_id": 15,
        "yosql_id": 2
      },
      {
        "OC": "F",
        "test_yosql_id": 15,
        "yosql_id": 3
      }
    ]
  },
  "test_OG": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "H": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_OG` (yosql_id INTEGER PRIMARY KEY UNIQUE, `H` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_OG (yosql_id, H, test_yosql_id) VALUES ('1', 'I', '15');"
    },
    "rows": [
      {
        "H": "I",
        "test_yosql_id": 15,
        "yosql_id": 1
      }
    ]
  },
  "test_OJ": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "K": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_OJ` (yosql_id INTEGER PRIMARY KEY UNIQUE, `K` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_OJ (yosql_id, K, test_yosql_id) VALUES ('1', 'L', '15');"
    },
    "rows": [
      {
        "K": "L",
        "test_yosql_id": 15,
        "yosql_id": 1
      }
    ]
  },
  "test_OR": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "S": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_OR` (yosql_id INTEGER PRIMARY KEY UNIQUE, `S` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_OR (yosql_id, S, test_yosql_id) VALUES ('1', 'T', '15');"
    },
    "rows": [
      {
        "S": "T",
        "test_yosql_id": 15,
        "yosql_id": 1
      }
    ]
  },
  "test_OU": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 1
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_OU` (yosql_id INTEGER PRIMARY KEY UNIQUE, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_OU (yosql_id, test_yosql_id) VALUES ('1', '15');"
    },
    "rows": [
      {
        "test_yosql_id": 15,
        "yosql_id": 1
      }
    ]
  },
  "test_OU_V": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "V": {
        "type": "TEXT",
        "order": 1
      },
      "test_OU_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 3,
    "queries": {
      "create": "CREATE TABLE `test_OU_V` (yosql_id INTEGER PRIMARY KEY UNIQUE, `V` TEXT, `test_OU_yosql_id` TEXT);",
      "insert": "INSERT INTO test_OU_V (yosql_id, V, test_OU_yosql_id) VALUES ('1', 'P', '1'), ('2', 'Q', '1'), ('3', 'R', '1');"
    },
    "rows": [
      {
        "V": "P",
        "test_OU_yosql_id": 1,
        "yosql_id": 1
      },
      {
        "V": "Q",
        "test_OU_yosql_id": 1,
        "yosql_id": 2
      },
      {
        "V": "R",
        "test_OU_yosql_id": 1,
        "yosql_id": 3
      }
    ]
  },
  "test_OX": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "OX": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 2,
    "queries": {
      "create": "CREATE TABLE `test_OX` (yosql_id INTEGER PRIMARY KEY UNIQUE, `OX` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_OX (yosql_id, OX, test_yosql_id) VALUES ('1', 'Y', '15'), ('2', 'Z', '15');"
    },
    "rows": [
      {
        "OX": "Y",
        "test_yosql_id": 15,
        "yosql_id": 1
      },
      {
        "OX": "Z",
        "test_yosql_id": 15,
        "yosql_id": 2
      }
    ]
  },
  "test_PC": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "PC": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 3,
    "queries": {
      "create": "CREATE TABLE `test_PC` (yosql_id INTEGER PRIMARY KEY UNIQUE, `PC` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_PC (yosql_id, PC, test_yosql_id) VALUES ('1', 'D', '16'), ('2', 'E', '16'), ('3', 'F', '16');"
    },
    "rows": [
      {
        "PC": "D",
        "test_yosql_id": 16,
        "yosql_id": 1
      },
      {
        "PC": "E",
        "test_yosql_id": 16,
        "yosql_id": 2
      },
      {
        "PC": "F",
        "test_yosql_id": 16,
        "yosql_id": 3
      }
    ]
  },
  "test_PG": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "H": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_PG` (yosql_id INTEGER PRIMARY KEY UNIQUE, `H` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_PG (yosql_id, H, test_yosql_id) VALUES ('1', 'I', '16');"
    },
    "rows": [
      {
        "H": "I",
        "test_yosql_id": 16,
        "yosql_id": 1
      }
    ]
  },
  "test_PJ": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "K": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_PJ` (yosql_id INTEGER PRIMARY KEY UNIQUE, `K` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_PJ (yosql_id, K, test_yosql_id) VALUES ('1', 'L', '16');"
    },
    "rows": [
      {
        "K": "L",
        "test_yosql_id": 16,
        "yosql_id": 1
      }
    ]
  },
  "test_PR": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "S": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_PR` (yosql_id INTEGER PRIMARY KEY UNIQUE, `S` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_PR (yosql_id, S, test_yosql_id) VALUES ('1', 'T', '16');"
    },
    "rows": [
      {
        "S": "T",
        "test_yosql_id": 16,
        "yosql_id": 1
      }
    ]
  },
  "test_PU": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 1
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_PU` (yosql_id INTEGER PRIMARY KEY UNIQUE, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_PU (yosql_id, test_yosql_id) VALUES ('1', '16');"
    },
    "rows": [
      {
        "test_yosql_id": 16,
        "yosql_id": 1
      }
    ]
  },
  "test_PU_V": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "V": {
        "type": "TEXT",
        "order": 1
      },
      "test_PU_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 3,
    "queries": {
      "create": "CREATE TABLE `test_PU_V` (yosql_id INTEGER PRIMARY KEY UNIQUE, `V` TEXT, `test_PU_yosql_id` TEXT);",
      "insert": "INSERT INTO test_PU_V (yosql_id, V, test_PU_yosql_id) VALUES ('1', 'P', '1'), ('2', 'Q', '1'), ('3', 'R', '1');"
    },
    "rows": [
      {
        "V": "P",
        "test_PU_yosql_id": 1,
        "yosql_id": 1
      },
      {
        "V": "Q",
        "test_PU_yosql_id": 1,
        "yosql_id": 2
      },
      {
        "V": "R",
        "test_PU_yosql_id": 1,
        "yosql_id": 3
      }
    ]
  },
  "test_PX": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "PX": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 2,
    "queries": {
      "create": "CREATE TABLE `test_PX` (yosql_id INTEGER PRIMARY KEY UNIQUE, `PX` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_PX (yosql_id, PX, test_yosql_id) VALUES ('1', 'Y', '16'), ('2', 'Z', '16');"
    },
    "rows": [
      {
        "PX": "Y",
        "test_yosql_id": 16,
        "yosql_id": 1
      },
      {
        "PX": "Z",
        "test_yosql_id": 16,
        "yosql_id": 2
      }
    ]
  },
  "test_QC": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "QC": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 3,
    "queries": {
      "create": "CREATE TABLE `test_QC` (yosql_id INTEGER PRIMARY KEY UNIQUE, `QC` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_QC (yosql_id, QC, test_yosql_id) VALUES ('1', 'D', '17'), ('2', 'E', '17'), ('3', 'F', '17');"
    },
    "rows": [
      {
        "QC": "D",
        "test_yosql_id": 17,
        "yosql_id": 1
      },
      {
        "QC": "E",
        "test_yosql_id": 17,
        "yosql_id": 2
      },
      {
        "QC": "F",
        "test_yosql_id": 17,
        "yosql_id": 3
      }
    ]
  },
  "test_QG": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "H": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_QG` (yosql_id INTEGER PRIMARY KEY UNIQUE, `H` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_QG (yosql_id, H, test_yosql_id) VALUES ('1', 'I', '17');"
    },
    "rows": [
      {
        "H": "I",
        "test_yosql_id": 17,
        "yosql_id": 1
      }
    ]
  },
  "test_QJ": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "K": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_QJ` (yosql_id INTEGER PRIMARY KEY UNIQUE, `K` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_QJ (yosql_id, K, test_yosql_id) VALUES ('1', 'L', '17');"
    },
    "rows": [
      {
        "K": "L",
        "test_yosql_id": 17,
        "yosql_id": 1
      }
    ]
  },
  "test_QR": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "S": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_QR` (yosql_id INTEGER PRIMARY KEY UNIQUE, `S` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_QR (yosql_id, S, test_yosql_id) VALUES ('1', 'T', '17');"
    },
    "rows": [
      {
        "S": "T",
        "test_yosql_id": 17,
        "yosql_id": 1
      }
    ]
  },
  "test_QU": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 1
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_QU` (yosql_id INTEGER PRIMARY KEY UNIQUE, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_QU (yosql_id, test_yosql_id) VALUES ('1', '17');"
    },
    "rows": [
      {
        "test_yosql_id": 17,
        "yosql_id": 1
      }
    ]
  },
  "test_QU_V": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "V": {
        "type": "TEXT",
        "order": 1
      },
      "test_QU_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 3,
    "queries": {
      "create": "CREATE TABLE `test_QU_V` (yosql_id INTEGER PRIMARY KEY UNIQUE, `V` TEXT, `test_QU_yosql_id` TEXT);",
      "insert": "INSERT INTO test_QU_V (yosql_id, V, test_QU_yosql_id) VALUES ('1', 'P', '1'), ('2', 'Q', '1'), ('3', 'R', '1');"
    },
    "rows": [
      {
        "V": "P",
        "test_QU_yosql_id": 1,
        "yosql_id": 1
      },
      {
        "V": "Q",
        "test_QU_yosql_id": 1,
        "yosql_id": 2
      },
      {
        "V": "R",
        "test_QU_yosql_id": 1,
        "yosql_id": 3
      }
    ]
  },
  "test_QX": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "QX": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 2,
    "queries": {
      "create": "CREATE TABLE `test_QX` (yosql_id INTEGER PRIMARY KEY UNIQUE, `QX` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_QX (yosql_id, QX, test_yosql_id) VALUES ('1', 'Y', '17'), ('2', 'Z', '17');"
    },
    "rows": [
      {
        "QX": "Y",
        "test_yosql_id": 17,
        "yosql_id": 1
      },
      {
        "QX": "Z",
        "test_yosql_id": 17,
        "yosql_id": 2
      }
    ]
  },
  "test_RC": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "RC": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 3,
    "queries": {
      "create": "CREATE TABLE `test_RC` (yosql_id INTEGER PRIMARY KEY UNIQUE, `RC` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_RC (yosql_id, RC, test_yosql_id) VALUES ('1', 'D', '18'), ('2', 'E', '18'), ('3', 'F', '18');"
    },
    "rows": [
      {
        "RC": "D",
        "test_yosql_id": 18,
        "yosql_id": 1
      },
      {
        "RC": "E",
        "test_yosql_id": 18,
        "yosql_id": 2
      },
      {
        "RC": "F",
        "test_yosql_id": 18,
        "yosql_id": 3
      }
    ]
  },
  "test_RG": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "H": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_RG` (yosql_id INTEGER PRIMARY KEY UNIQUE, `H` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_RG (yosql_id, H, test_yosql_id) VALUES ('1', 'I', '18');"
    },
    "rows": [
      {
        "H": "I",
        "test_yosql_id": 18,
        "yosql_id": 1
      }
    ]
  },
  "test_RJ": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "K": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_RJ` (yosql_id INTEGER PRIMARY KEY UNIQUE, `K` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_RJ (yosql_id, K, test_yosql_id) VALUES ('1', 'L', '18');"
    },
    "rows": [
      {
        "K": "L",
        "test_yosql_id": 18,
        "yosql_id": 1
      }
    ]
  },
  "test_RR": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "S": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_RR` (yosql_id INTEGER PRIMARY KEY UNIQUE, `S` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_RR (yosql_id, S, test_yosql_id) VALUES ('1', 'T', '18');"
    },
    "rows": [
      {
        "S": "T",
        "test_yosql_id": 18,
        "yosql_id": 1
      }
    ]
  },
  "test_RU": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 1
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_RU` (yosql_id INTEGER PRIMARY KEY UNIQUE, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_RU (yosql_id, test_yosql_id) VALUES ('1', '18');"
    },
    "rows": [
      {
        "test_yosql_id": 18,
        "yosql_id": 1
      }
    ]
  },
  "test_RU_V": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "V": {
        "type": "TEXT",
        "order": 1
      },
      "test_RU_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 3,
    "queries": {
      "create": "CREATE TABLE `test_RU_V` (yosql_id INTEGER PRIMARY KEY UNIQUE, `V` TEXT, `test_RU_yosql_id` TEXT);",
      "insert": "INSERT INTO test_RU_V (yosql_id, V, test_RU_yosql_id) VALUES ('1', 'P', '1'), ('2', 'Q', '1'), ('3', 'R', '1');"
    },
    "rows": [
      {
        "V": "P",
        "test_RU_yosql_id": 1,
        "yosql_id": 1
      },
      {
        "V": "Q",
        "test_RU_yosql_id": 1,
        "yosql_id": 2
      },
      {
        "V": "R",
        "test_RU_yosql_id": 1,
        "yosql_id": 3
      }
    ]
  },
  "test_RX": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "RX": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 2,
    "queries": {
      "create": "CREATE TABLE `test_RX` (yosql_id INTEGER PRIMARY KEY UNIQUE, `RX` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_RX (yosql_id, RX, test_yosql_id) VALUES ('1', 'Y', '18'), ('2', 'Z', '18');"
    },
    "rows": [
      {
        "RX": "Y",
        "test_yosql_id": 18,
        "yosql_id": 1
      },
      {
        "RX": "Z",
        "test_yosql_id": 18,
        "yosql_id": 2
      }
    ]
  },
  "test_SC": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "SC": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 3,
    "queries": {
      "create": "CREATE TABLE `test_SC` (yosql_id INTEGER PRIMARY KEY UNIQUE, `SC` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_SC (yosql_id, SC, test_yosql_id) VALUES ('1', 'D', '19'), ('2', 'E', '19'), ('3', 'F', '19');"
    },
    "rows": [
      {
        "SC": "D",
        "test_yosql_id": 19,
        "yosql_id": 1
      },
      {
        "SC": "E",
        "test_yosql_id": 19,
        "yosql_id": 2
      },
      {
        "SC": "F",
        "test_yosql_id": 19,
        "yosql_id": 3
      }
    ]
  },
  "test_SG": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "H": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_SG` (yosql_id INTEGER PRIMARY KEY UNIQUE, `H` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_SG (yosql_id, H, test_yosql_id) VALUES ('1', 'I', '19');"
    },
    "rows": [
      {
        "H": "I",
        "test_yosql_id": 19,
        "yosql_id": 1
      }
    ]
  },
  "test_SJ": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "K": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_SJ` (yosql_id INTEGER PRIMARY KEY UNIQUE, `K` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_SJ (yosql_id, K, test_yosql_id) VALUES ('1', 'L', '19');"
    },
    "rows": [
      {
        "K": "L",
        "test_yosql_id": 19,
        "yosql_id": 1
      }
    ]
  },
  "test_SR": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "S": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_SR` (yosql_id INTEGER PRIMARY KEY UNIQUE, `S` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_SR (yosql_id, S, test_yosql_id) VALUES ('1', 'T', '19');"
    },
    "rows": [
      {
        "S": "T",
        "test_yosql_id": 19,
        "yosql_id": 1
      }
    ]
  },
  "test_SU": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 1
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_SU` (yosql_id INTEGER PRIMARY KEY UNIQUE, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_SU (yosql_id, test_yosql_id) VALUES ('1', '19');"
    },
    "rows": [
      {
        "test_yosql_id": 19,
        "yosql_id": 1
      }
    ]
  },
  "test_SU_V": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "V": {
        "type": "TEXT",
        "order": 1
      },
      "test_SU_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 3,
    "queries": {
      "create": "CREATE TABLE `test_SU_V` (yosql_id INTEGER PRIMARY KEY UNIQUE, `V` TEXT, `test_SU_yosql_id` TEXT);",
      "insert": "INSERT INTO test_SU_V (yosql_id, V, test_SU_yosql_id) VALUES ('1', 'P', '1'), ('2', 'Q', '1'), ('3', 'R', '1');"
    },
    "rows": [
      {
        "V": "P",
        "test_SU_yosql_id": 1,
        "yosql_id": 1
      },
      {
        "V": "Q",
        "test_SU_yosql_id": 1,
        "yosql_id": 2
      },
      {
        "V": "R",
        "test_SU_yosql_id": 1,
        "yosql_id": 3
      }
    ]
  },
  "test_SX": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "SX": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 2,
    "queries": {
      "create": "CREATE TABLE `test_SX` (yosql_id INTEGER PRIMARY KEY UNIQUE, `SX` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_SX (yosql_id, SX, test_yosql_id) VALUES ('1', 'Y', '19'), ('2', 'Z', '19');"
    },
    "rows": [
      {
        "SX": "Y",
        "test_yosql_id": 19,
        "yosql_id": 1
      },
      {
        "SX": "Z",
        "test_yosql_id": 19,
        "yosql_id": 2
      }
    ]
  },
  "test_TC": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "TC": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 3,
    "queries": {
      "create": "CREATE TABLE `test_TC` (yosql_id INTEGER PRIMARY KEY UNIQUE, `TC` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_TC (yosql_id, TC, test_yosql_id) VALUES ('1', 'D', '20'), ('2', 'E', '20'), ('3', 'F', '20');"
    },
    "rows": [
      {
        "TC": "D",
        "test_yosql_id": 20,
        "yosql_id": 1
      },
      {
        "TC": "E",
        "test_yosql_id": 20,
        "yosql_id": 2
      },
      {
        "TC": "F",
        "test_yosql_id": 20,
        "yosql_id": 3
      }
    ]
  },
  "test_TG": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "H": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_TG` (yosql_id INTEGER PRIMARY KEY UNIQUE, `H` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_TG (yosql_id, H, test_yosql_id) VALUES ('1', 'I', '20');"
    },
    "rows": [
      {
        "H": "I",
        "test_yosql_id": 20,
        "yosql_id": 1
      }
    ]
  },
  "test_TJ": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "K": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_TJ` (yosql_id INTEGER PRIMARY KEY UNIQUE, `K` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_TJ (yosql_id, K, test_yosql_id) VALUES ('1', 'L', '20');"
    },
    "rows": [
      {
        "K": "L",
        "test_yosql_id": 20,
        "yosql_id": 1
      }
    ]
  },
  "test_TR": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "S": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_TR` (yosql_id INTEGER PRIMARY KEY UNIQUE, `S` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_TR (yosql_id, S, test_yosql_id) VALUES ('1', 'T', '20');"
    },
    "rows": [
      {
        "S": "T",
        "test_yosql_id": 20,
        "yosql_id": 1
      }
    ]
  },
  "test_TU": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 1
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_TU` (yosql_id INTEGER PRIMARY KEY UNIQUE, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_TU (yosql_id, test_yosql_id) VALUES ('1', '20');"
    },
    "rows": [
      {
        "test_yosql_id": 20,
        "yosql_id": 1
      }
    ]
  },
  "test_TU_V": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "V": {
        "type": "TEXT",
        "order": 1
      },
      "test_TU_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 3,
    "queries": {
      "create": "CREATE TABLE `test_TU_V` (yosql_id INTEGER PRIMARY KEY UNIQUE, `V` TEXT, `test_TU_yosql_id` TEXT);",
      "insert": "INSERT INTO test_TU_V (yosql_id, V, test_TU_yosql_id) VALUES ('1', 'P', '1'), ('2', 'Q', '1'), ('3', 'R', '1');"
    },
    "rows": [
      {
        "V": "P",
        "test_TU_yosql_id": 1,
        "yosql_id": 1
      },
      {
        "V": "Q",
        "test_TU_yosql_id": 1,
        "yosql_id": 2
      },
      {
        "V": "R",
        "test_TU_yosql_id": 1,
        "yosql_id": 3
      }
    ]
  },
  "test_TX": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "TX": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 2,
    "queries": {
      "create": "CREATE TABLE `test_TX` (yosql_id INTEGER PRIMARY KEY UNIQUE, `TX` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_TX (yosql_id, TX, test_yosql_id) VALUES ('1', 'Y', '20'), ('2', 'Z', '20');"
    },
    "rows": [
      {
        "TX": "Y",
        "test_yosql_id": 20,
        "yosql_id": 1
      },
      {
        "TX": "Z",
        "test_yosql_id": 20,
        "yosql_id": 2
      }
    ]
  },
  "test_UC": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "UC": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 3,
    "queries": {
      "create": "CREATE TABLE `test_UC` (yosql_id INTEGER PRIMARY KEY UNIQUE, `UC` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_UC (yosql_id, UC, test_yosql_id) VALUES ('1', 'D', '21'), ('2', 'E', '21'), ('3', 'F', '21');"
    },
    "rows": [
      {
        "UC": "D",
        "test_yosql_id": 21,
        "yosql_id": 1
      },
      {
        "UC": "E",
        "test_yosql_id": 21,
        "yosql_id": 2
      },
      {
        "UC": "F",
        "test_yosql_id": 21,
        "yosql_id": 3
      }
    ]
  },
  "test_UG": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "H": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_UG` (yosql_id INTEGER PRIMARY KEY UNIQUE, `H` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_UG (yosql_id, H, test_yosql_id) VALUES ('1', 'I', '21');"
    },
    "rows": [
      {
        "H": "I",
        "test_yosql_id": 21,
        "yosql_id": 1
      }
    ]
  },
  "test_UJ": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "K": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_UJ` (yosql_id INTEGER PRIMARY KEY UNIQUE, `K` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_UJ (yosql_id, K, test_yosql_id) VALUES ('1', 'L', '21');"
    },
    "rows": [
      {
        "K": "L",
        "test_yosql_id": 21,
        "yosql_id": 1
      }
    ]
  },
  "test_UR": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "S": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_UR` (yosql_id INTEGER PRIMARY KEY UNIQUE, `S` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_UR (yosql_id, S, test_yosql_id) VALUES ('1', 'T', '21');"
    },
    "rows": [
      {
        "S": "T",
        "test_yosql_id": 21,
        "yosql_id": 1
      }
    ]
  },
  "test_UU": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 1
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_UU` (yosql_id INTEGER PRIMARY KEY UNIQUE, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_UU (yosql_id, test_yosql_id) VALUES ('1', '21');"
    },
    "rows": [
      {
        "test_yosql_id": 21,
        "yosql_id": 1
      }
    ]
  },
  "test_UU_V": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "V": {
        "type": "TEXT",
        "order": 1
      },
      "test_UU_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 3,
    "queries": {
      "create": "CREATE TABLE `test_UU_V` (yosql_id INTEGER PRIMARY KEY UNIQUE, `V` TEXT, `test_UU_yosql_id` TEXT);",
      "insert": "INSERT INTO test_UU_V (yosql_id, V, test_UU_yosql_id) VALUES ('1', 'P', '1'), ('2', 'Q', '1'), ('3', 'R', '1');"
    },
    "rows": [
      {
        "V": "P",
        "test_UU_yosql_id": 1,
        "yosql_id": 1
      },
      {
        "V": "Q",
        "test_UU_yosql_id": 1,
        "yosql_id": 2
      },
      {
        "V": "R",
        "test_UU_yosql_id": 1,
        "yosql_id": 3
      }
    ]
  },
  "test_UX": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "UX": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 2,
    "queries": {
      "create": "CREATE TABLE `test_UX` (yosql_id INTEGER PRIMARY KEY UNIQUE, `UX` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_UX (yosql_id, UX, test_yosql_id) VALUES ('1', 'Y', '21'), ('2', 'Z', '21');"
    },
    "rows": [
      {
        "UX": "Y",
        "test_yosql_id": 21,
        "yosql_id": 1
      },
      {
        "UX": "Z",
        "test_yosql_id": 21,
        "yosql_id": 2
      }
    ]
  },
  "test_VC": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "VC": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 3,
    "queries": {
      "create": "CREATE TABLE `test_VC` (yosql_id INTEGER PRIMARY KEY UNIQUE, `VC` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_VC (yosql_id, VC, test_yosql_id) VALUES ('1', 'D', '22'), ('2', 'E', '22'), ('3', 'F', '22');"
    },
    "rows": [
      {
        "VC": "D",
        "test_yosql_id": 22,
        "yosql_id": 1
      },
      {
        "VC": "E",
        "test_yosql_id": 22,
        "yosql_id": 2
      },
      {
        "VC": "F",
        "test_yosql_id": 22,
        "yosql_id": 3
      }
    ]
  },
  "test_VG": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "H": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_VG` (yosql_id INTEGER PRIMARY KEY UNIQUE, `H` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_VG (yosql_id, H, test_yosql_id) VALUES ('1', 'I', '22');"
    },
    "rows": [
      {
        "H": "I",
        "test_yosql_id": 22,
        "yosql_id": 1
      }
    ]
  },
  "test_VJ": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "K": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_VJ` (yosql_id INTEGER PRIMARY KEY UNIQUE, `K` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_VJ (yosql_id, K, test_yosql_id) VALUES ('1', 'L', '22');"
    },
    "rows": [
      {
        "K": "L",
        "test_yosql_id": 22,
        "yosql_id": 1
      }
    ]
  },
  "test_VR": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "S": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_VR` (yosql_id INTEGER PRIMARY KEY UNIQUE, `S` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_VR (yosql_id, S, test_yosql_id) VALUES ('1', 'T', '22');"
    },
    "rows": [
      {
        "S": "T",
        "test_yosql_id": 22,
        "yosql_id": 1
      }
    ]
  },
  "test_VU": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 1
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_VU` (yosql_id INTEGER PRIMARY KEY UNIQUE, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_VU (yosql_id, test_yosql_id) VALUES ('1', '22');"
    },
    "rows": [
      {
        "test_yosql_id": 22,
        "yosql_id": 1
      }
    ]
  },
  "test_VU_V": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "V": {
        "type": "TEXT",
        "order": 1
      },
      "test_VU_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 3,
    "queries": {
      "create": "CREATE TABLE `test_VU_V` (yosql_id INTEGER PRIMARY KEY UNIQUE, `V` TEXT, `test_VU_yosql_id` TEXT);",
      "insert": "INSERT INTO test_VU_V (yosql_id, V, test_VU_yosql_id) VALUES ('1', 'P', '1'), ('2', 'Q', '1'), ('3', 'R', '1');"
    },
    "rows": [
      {
        "V": "P",
        "test_VU_yosql_id": 1,
        "yosql_id": 1
      },
      {
        "V": "Q",
        "test_VU_yosql_id": 1,
        "yosql_id": 2
      },
      {
        "V": "R",
        "test_VU_yosql_id": 1,
        "yosql_id": 3
      }
    ]
  },
  "test_VX": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "VX": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 2,
    "queries": {
      "create": "CREATE TABLE `test_VX` (yosql_id INTEGER PRIMARY KEY UNIQUE, `VX` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_VX (yosql_id, VX, test_yosql_id) VALUES ('1', 'Y', '22'), ('2', 'Z', '22');"
    },
    "rows": [
      {
        "VX": "Y",
        "test_yosql_id": 22,
        "yosql_id": 1
      },
      {
        "VX": "Z",
        "test_yosql_id": 22,
        "yosql_id": 2
      }
    ]
  },
  "test_WC": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "WC": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 3,
    "queries": {
      "create": "CREATE TABLE `test_WC` (yosql_id INTEGER PRIMARY KEY UNIQUE, `WC` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_WC (yosql_id, WC, test_yosql_id) VALUES ('1', 'D', '23'), ('2', 'E', '23'), ('3', 'F', '23');"
    },
    "rows": [
      {
        "WC": "D",
        "test_yosql_id": 23,
        "yosql_id": 1
      },
      {
        "WC": "E",
        "test_yosql_id": 23,
        "yosql_id": 2
      },
      {
        "WC": "F",
        "test_yosql_id": 23,
        "yosql_id": 3
      }
    ]
  },
  "test_WG": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "H": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_WG` (yosql_id INTEGER PRIMARY KEY UNIQUE, `H` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_WG (yosql_id, H, test_yosql_id) VALUES ('1', 'I', '23');"
    },
    "rows": [
      {
        "H": "I",
        "test_yosql_id": 23,
        "yosql_id": 1
      }
    ]
  },
  "test_WJ": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "K": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_WJ` (yosql_id INTEGER PRIMARY KEY UNIQUE, `K` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_WJ (yosql_id, K, test_yosql_id) VALUES ('1', 'L', '23');"
    },
    "rows": [
      {
        "K": "L",
        "test_yosql_id": 23,
        "yosql_id": 1
      }
    ]
  },
  "test_WR": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "S": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_WR` (yosql_id INTEGER PRIMARY KEY UNIQUE, `S` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_WR (yosql_id, S, test_yosql_id) VALUES ('1', 'T', '23');"
    },
    "rows": [
      {
        "S": "T",
        "test_yosql_id": 23,
        "yosql_id": 1
      }
    ]
  },
  "test_WU": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 1
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_WU` (yosql_id INTEGER PRIMARY KEY UNIQUE, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_WU (yosql_id, test_yosql_id) VALUES ('1', '23');"
    },
    "rows": [
      {
        "test_yosql_id": 23,
        "yosql_id": 1
      }
    ]
  },
  "test_WU_V": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "V": {
        "type": "TEXT",
        "order": 1
      },
      "test_WU_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 3,
    "queries": {
      "create": "CREATE TABLE `test_WU_V` (yosql_id INTEGER PRIMARY KEY UNIQUE, `V` TEXT, `test_WU_yosql_id` TEXT);",
      "insert": "INSERT INTO test_WU_V (yosql_id, V, test_WU_yosql_id) VALUES ('1', 'P', '1'), ('2', 'Q', '1'), ('3', 'R', '1');"
    },
    "rows": [
      {
        "V": "P",
        "test_WU_yosql_id": 1,
        "yosql_id": 1
      },
      {
        "V": "Q",
        "test_WU_yosql_id": 1,
        "yosql_id": 2
      },
      {
        "V": "R",
        "test_WU_yosql_id": 1,
        "yosql_id": 3
      }
    ]
  },
  "test_WX": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "WX": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 2,
    "queries": {
      "create": "CREATE TABLE `test_WX` (yosql_id INTEGER PRIMARY KEY UNIQUE, `WX` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_WX (yosql_id, WX, test_yosql_id) VALUES ('1', 'Y', '23'), ('2', 'Z', '23');"
    },
    "rows": [
      {
        "WX": "Y",
        "test_yosql_id": 23,
        "yosql_id": 1
      },
      {
        "WX": "Z",
        "test_yosql_id": 23,
        "yosql_id": 2
      }
    ]
  },
  "test_XC": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "XC": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 3,
    "queries": {
      "create": "CREATE TABLE `test_XC` (yosql_id INTEGER PRIMARY KEY UNIQUE, `XC` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_XC (yosql_id, XC, test_yosql_id) VALUES ('1', 'D', '24'), ('2', 'E', '24'), ('3', 'F', '24');"
    },
    "rows": [
      {
        "XC": "D",
        "test_yosql_id": 24,
        "yosql_id": 1
      },
      {
        "XC": "E",
        "test_yosql_id": 24,
        "yosql_id": 2
      },
      {
        "XC": "F",
        "test_yosql_id": 24,
        "yosql_id": 3
      }
    ]
  },
  "test_XG": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "H": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_XG` (yosql_id INTEGER PRIMARY KEY UNIQUE, `H` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_XG (yosql_id, H, test_yosql_id) VALUES ('1', 'I', '24');"
    },
    "rows": [
      {
        "H": "I",
        "test_yosql_id": 24,
        "yosql_id": 1
      }
    ]
  },
  "test_XJ": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "K": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_XJ` (yosql_id INTEGER PRIMARY KEY UNIQUE, `K` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_XJ (yosql_id, K, test_yosql_id) VALUES ('1', 'L', '24');"
    },
    "rows": [
      {
        "K": "L",
        "test_yosql_id": 24,
        "yosql_id": 1
      }
    ]
  },
  "test_XR": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "S": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_XR` (yosql_id INTEGER PRIMARY KEY UNIQUE, `S` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_XR (yosql_id, S, test_yosql_id) VALUES ('1', 'T', '24');"
    },
    "rows": [
      {
        "S": "T",
        "test_yosql_id": 24,
        "yosql_id": 1
      }
    ]
  },
  "test_XU": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 1
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_XU` (yosql_id INTEGER PRIMARY KEY UNIQUE, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_XU (yosql_id, test_yosql_id) VALUES ('1', '24');"
    },
    "rows": [
      {
        "test_yosql_id": 24,
        "yosql_id": 1
      }
    ]
  },
  "test_XU_V": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "V": {
        "type": "TEXT",
        "order": 1
      },
      "test_XU_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 3,
    "queries": {
      "create": "CREATE TABLE `test_XU_V` (yosql_id INTEGER PRIMARY KEY UNIQUE, `V` TEXT, `test_XU_yosql_id` TEXT);",
      "insert": "INSERT INTO test_XU_V (yosql_id, V, test_XU_yosql_id) VALUES ('1', 'P', '1'), ('2', 'Q', '1'), ('3', 'R', '1');"
    },
    "rows": [
      {
        "V": "P",
        "test_XU_yosql_id": 1,
        "yosql_id": 1
      },
      {
        "V": "Q",
        "test_XU_yosql_id": 1,
        "yosql_id": 2
      },
      {
        "V": "R",
        "test_XU_yosql_id": 1,
        "yosql_id": 3
      }
    ]
  },
  "test_XX": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "XX": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 2,
    "queries": {
      "create": "CREATE TABLE `test_XX` (yosql_id INTEGER PRIMARY KEY UNIQUE, `XX` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_XX (yosql_id, XX, test_yosql_id) VALUES ('1', 'Y', '24'), ('2', 'Z', '24');"
    },
    "rows": [
      {
        "XX": "Y",
        "test_yosql_id": 24,
        "yosql_id": 1
      },
      {
        "XX": "Z",
        "test_yosql_id": 24,
        "yosql_id": 2
      }
    ]
  },
  "test_YC": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "YC": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 3,
    "queries": {
      "create": "CREATE TABLE `test_YC` (yosql_id INTEGER PRIMARY KEY UNIQUE, `YC` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_YC (yosql_id, YC, test_yosql_id) VALUES ('1', 'D', '25'), ('2', 'E', '25'), ('3', 'F', '25');"
    },
    "rows": [
      {
        "YC": "D",
        "test_yosql_id": 25,
        "yosql_id": 1
      },
      {
        "YC": "E",
        "test_yosql_id": 25,
        "yosql_id": 2
      },
      {
        "YC": "F",
        "test_yosql_id": 25,
        "yosql_id": 3
      }
    ]
  },
  "test_YG": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "H": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_YG` (yosql_id INTEGER PRIMARY KEY UNIQUE, `H` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_YG (yosql_id, H, test_yosql_id) VALUES ('1', 'I', '25');"
    },
    "rows": [
      {
        "H": "I",
        "test_yosql_id": 25,
        "yosql_id": 1
      }
    ]
  },
  "test_YJ": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "K": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_YJ` (yosql_id INTEGER PRIMARY KEY UNIQUE, `K` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_YJ (yosql_id, K, test_yosql_id) VALUES ('1', 'L', '25');"
    },
    "rows": [
      {
        "K": "L",
        "test_yosql_id": 25,
        "yosql_id": 1
      }
    ]
  },
  "test_YR": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "S": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_YR` (yosql_id INTEGER PRIMARY KEY UNIQUE, `S` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_YR (yosql_id, S, test_yosql_id) VALUES ('1', 'T', '25');"
    },
    "rows": [
      {
        "S": "T",
        "test_yosql_id": 25,
        "yosql_id": 1
      }
    ]
  },
  "test_YU": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 1
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_YU` (yosql_id INTEGER PRIMARY KEY UNIQUE, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_YU (yosql_id, test_yosql_id) VALUES ('1', '25');"
    },
    "rows": [
      {
        "test_yosql_id": 25,
        "yosql_id": 1
      }
    ]
  },
  "test_YU_V": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "V": {
        "type": "TEXT",
        "order": 1
      },
      "test_YU_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 3,
    "queries": {
      "create": "CREATE TABLE `test_YU_V` (yosql_id INTEGER PRIMARY KEY UNIQUE, `V` TEXT, `test_YU_yosql_id` TEXT);",
      "insert": "INSERT INTO test_YU_V (yosql_id, V, test_YU_yosql_id) VALUES ('1', 'P', '1'), ('2', 'Q', '1'), ('3', 'R', '1');"
    },
    "rows": [
      {
        "V": "P",
        "test_YU_yosql_id": 1,
        "yosql_id": 1
      },
      {
        "V": "Q",
        "test_YU_yosql_id": 1,
        "yosql_id": 2
      },
      {
        "V": "R",
        "test_YU_yosql_id": 1,
        "yosql_id": 3
      }
    ]
  },
  "test_YX": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "YX": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 2,
    "queries": {
      "create": "CREATE TABLE `test_YX` (yosql_id INTEGER PRIMARY KEY UNIQUE, `YX` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_YX (yosql_id, YX, test_yosql_id) VALUES ('1', 'Y', '25'), ('2', 'Z', '25');"
    },
    "rows": [
      {
        "YX": "Y",
        "test_yosql_id": 25,
        "yosql_id": 1
      },
      {
        "YX": "Z",
        "test_yosql_id": 25,
        "yosql_id": 2
      }
    ]
  },
  "test_ZC": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "ZC": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 3,
    "queries": {
      "create": "CREATE TABLE `test_ZC` (yosql_id INTEGER PRIMARY KEY UNIQUE, `ZC` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_ZC (yosql_id, ZC, test_yosql_id) VALUES ('1', 'D', '26'), ('2', 'E', '26'), ('3', 'F', '26');"
    },
    "rows": [
      {
        "ZC": "D",
        "test_yosql_id": 26,
        "yosql_id": 1
      },
      {
        "ZC": "E",
        "test_yosql_id": 26,
        "yosql_id": 2
      },
      {
        "ZC": "F",
        "test_yosql_id": 26,
        "yosql_id": 3
      }
    ]
  },
  "test_ZG": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "H": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_ZG` (yosql_id INTEGER PRIMARY KEY UNIQUE, `H` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_ZG (yosql_id, H, test_yosql_id) VALUES ('1', 'I', '26');"
    },
    "rows": [
      {
        "H": "I",
        "test_yosql_id": 26,
        "yosql_id": 1
      }
    ]
  },
  "test_ZJ": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "K": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_ZJ` (yosql_id INTEGER PRIMARY KEY UNIQUE, `K` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_ZJ (yosql_id, K, test_yosql_id) VALUES ('1', 'L', '26');"
    },
    "rows": [
      {
        "K": "L",
        "test_yosql_id": 26,
        "yosql_id": 1
      }
    ]
  },
  "test_ZR": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "S": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_ZR` (yosql_id INTEGER PRIMARY KEY UNIQUE, `S` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_ZR (yosql_id, S, test_yosql_id) VALUES ('1', 'T', '26');"
    },
    "rows": [
      {
        "S": "T",
        "test_yosql_id": 26,
        "yosql_id": 1
      }
    ]
  },
  "test_ZU": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 1
      }
    },
    "length": 1,
    "queries": {
      "create": "CREATE TABLE `test_ZU` (yosql_id INTEGER PRIMARY KEY UNIQUE, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_ZU (yosql_id, test_yosql_id) VALUES ('1', '26');"
    },
    "rows": [
      {
        "test_yosql_id": 26,
        "yosql_id": 1
      }
    ]
  },
  "test_ZU_V": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "V": {
        "type": "TEXT",
        "order": 1
      },
      "test_ZU_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 3,
    "queries": {
      "create": "CREATE TABLE `test_ZU_V` (yosql_id INTEGER PRIMARY KEY UNIQUE, `V` TEXT, `test_ZU_yosql_id` TEXT);",
      "insert": "INSERT INTO test_ZU_V (yosql_id, V, test_ZU_yosql_id) VALUES ('1', 'P', '1'), ('2', 'Q', '1'), ('3', 'R', '1');"
    },
    "rows": [
      {
        "V": "P",
        "test_ZU_yosql_id": 1,
        "yosql_id": 1
      },
      {
        "V": "Q",
        "test_ZU_yosql_id": 1,
        "yosql_id": 2
      },
      {
        "V": "R",
        "test_ZU_yosql_id": 1,
        "yosql_id": 3
      }
    ]
  },
  "test_ZX": {
    "columns": {
      "yosql_id": {
        "type": "INTEGER PRIMARY KEY UNIQUE",
        "order": 0
      },
      "ZX": {
        "type": "TEXT",
        "order": 1
      },
      "test_yosql_id": {
        "type": "TEXT",
        "order": 2
      }
    },
    "length": 2,
    "queries": {
      "create": "CREATE TABLE `test_ZX` (yosql_id INTEGER PRIMARY KEY UNIQUE, `ZX` TEXT, `test_yosql_id` TEXT);",
      "insert": "INSERT INTO test_ZX (yosql_id, ZX, test_yosql_id) VALUES ('1', 'Y', '26'), ('2', 'Z', '26');"
    },
    "rows": [
      {
        "ZX": "Y",
        "test_yosql_id": 26,
        "yosql_id": 1
      },
      {
        "ZX": "Z",
        "test_yosql_id": 26,
        "yosql_id": 2
      }
    ]
  }
}
