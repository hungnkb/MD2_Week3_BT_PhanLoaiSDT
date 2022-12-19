let classifyPhoneCarrier = (numbers: string[]) => {
    let i = 0;
    let mobiphone: string[] = [];
    let vinaphone: string[] = [];
    let viettel: string[] = [];
    while (i < numbers.length) {
        if (numbers[i].substring(0,3) == '090') {
            mobiphone.push(numbers[i]);
            i++;
        } else if (numbers[i].substring(0,3) == '091') {
            vinaphone.push(numbers[i]);
            i++;
        } else {
            viettel.push(numbers[i]);
            i++;
        }
    }
    console.log('Mobiphone: ' + mobiphone);
    console.log('Vinaphone: ' + vinaphone);
    console.log('Viettel: ' + viettel);
}

classifyPhoneCarrier(['0901', '0911112', '09221', '0912', '0981', '098213'])
