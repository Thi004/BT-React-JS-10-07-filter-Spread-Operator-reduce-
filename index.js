//1. Phân tách mảng colors gồm ba phần tử và lấy ra các giá trị của các phần tử đó vào các biến firstColor, secondColor, và thirdColor.
let colorArr = ['Red', 'Green', 'Blue'];
let [firstColor, secondColor, thirdColor] = colorArr;
console.log('cau 1: ')
console.log(colorArr)
console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);

//2. Phân tách đối tượng person có hai thuộc tính là name và age vào các biến tương ứng.
let personArr = [
    {
        name: 'Lan',
        age: 30,
    }
]
let [{name, age}] = personArr;
console.log('cau 2: ')
console.log(personArr)
console.log(name);
console.log(age);


//3. Tạo một mảng mới bằng cách nối hai mảng arr1 và arr2 vào một mảng mới sử dụng spread operator.
let arr1 = [2,6,8,4]
let arr2 = [5,8,12]
let arrTotal = [...arr1, ...arr2]
console.log('cau 3: ')
console.log(arrTotal)


//4. Tạo một bản sao của mảng originalArray bằng cách sử dụng spread operator.
let originalArray = [9,2,13,58]
let copyOriginalArray = [...originalArray]
console.log('cau 4: ')
console.log(copyOriginalArray)


//5. Thêm một phần tử số 4 vào cuối mảng arr bằng cách sử dụng spread operator
let newArr = [...arr1, 4]
console.log('cau 5')
console.log(newArr)


//6. Cho hai đối tượng obj1 và obj2,
// viết một đoạn mã sử dụng Spread Operator để tạo một đối tượng mới chứa tất cả các thuộc tính từ cả hai đối tượng.
let obj1 = {name: 'Nam', class: 'C03'}
let obj2 = {contact: '0123456', age: 28}
let objTotal = {...obj1, ...obj2}
console.log('cau 6: ')
console.log(objTotal)


//7. Cho một đối tượng person với các thuộc tính như name, age, và gender,
// viết một đoạn mã sử dụng Spread Operator để thêm một thuộc tính mới là country có giá trị là "Vietnam".
let person = {name: 'Nam', age: 30, gender: 'male'}
person = {...person, country: 'Vietnam'}
console.log('cau 7: ')
console.log(person)


//8. Sử dụng filter để lọc ra các số chẵn từ một mảng số nguyên.
let arr = [55,8,14,7,11]
let even = arr.filter(e => e % 2 === 0)
console.log('cau 8: ')
console.log(even)

//9. Sử dụng filter để lọc ra các chuỗi có độ dài lớn hơn một ngưỡng cho trước từ một mảng các chuỗi.
let arrString = ["Hello World!", 'Bye', "Good Morning"]
let lengthStr = 5;
let newArrString = arrString.filter(e => e.length > lengthStr)
console.log('cau 9')
console.log(newArrString)