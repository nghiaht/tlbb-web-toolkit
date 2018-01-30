
// current: 23

// next: 30

// 23-30
const TINH_THONG_TRANG_BI_METADATA = [
  {"from": 1, "to": 10, "quantityPerLevel": 1},
  {"from": 11, "to": 20, "quantityPerLevel": 6},
  {"from": 21, "to": 30, "quantityPerLevel": 12},
  {"from": 31, "to": 40, "quantityPerLevel": 14},
  {"from": 41, "to": 50, "quantityPerLevel": 16},
  {"from": 51, "to": 60, "quantityPerLevel": 18},
  {"from": 61, "to": 70, "quantityPerLevel": 20},
  {"from": 71, "to": 80, "quantityPerLevel": 22},
  {"from": 81, "to": 90, "quantityPerLevel": 24},
  {"from": 91, "to": 100, "quantityPerLevel": 25}
];

function findQuantityPerLevel(level) {
  let quantity = 0;
  for(let  i = 0; i < TINH_THONG_TRANG_BI_METADATA.length; i++) {
    let item = TINH_THONG_TRANG_BI_METADATA[i];
    if (level >= item.from && level <= item.to) {
      quantity = item.quantityPerLevel;
      break;
    }
  }
  return quantity;
}


export function calculateKimTinhThach(currentTinhThongLevel, targetTinhThongLevel) {
  let totalQuantity = 0;

  while(currentTinhThongLevel <= targetTinhThongLevel) {
    totalQuantity += findQuantityPerLevel(currentTinhThongLevel);
    currentTinhThongLevel += 1;

  }
  return totalQuantity;
}

if (require.main === module) {
  console.log(calculateKimTinhThach(1, 100));
}