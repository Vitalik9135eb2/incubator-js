//1. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель, а возвращает сторку,
// состоящую из указанного количества повторов подстроки с использованием разделителя.
// repeatString("yo", 3, " ") => "yo yo yo"
// repeatString("yo", 3, ",") => "yo,yo,yo"
// for или str.repeat()

//2. Реализуйте функцию, которая принимает параметром сторку и подстроку, а возвращает true, если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.
// checkStart("Incubator", "inc") => true
// checkStart("Incubator", "yo") => false
// str.startWith() slice indexOF

function task2(a, b){
    a.toLowerCase()[0] === b.toLowerCase()[0] ? console.log(true) : console.log(false)
}
task2("Qeeeerrrr", "qsds")
task2("eertyt", "wsdssds")

//3. Реализуйте функцию, которая принимает параметром строку и число (количество символов), а возвращает строку из параметров,
// обрезанную до указанного количества символов и завершает её многоточием.
//truncateString("Всем студентам инкубатора желаю удачи!", 10) => "Всем студе..."

function task3 (a,b){
   return console.log(a.slice(0, b) + "...")
}
task3("12 34567891011121314151617",5)

//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово в предложении, если в параметрах пустая строка, то возвращает null.
// getMinLengthWord("Всем студентам инкубатора желаю удачи!") => "Всем"
// getMinLengthWord("") => null
// split()


function task4(a){
    const textAll = a.split(" ")
    console.log(textAll)

    let min = textAll[0];
    for (const el of textAll) {
        if (el.length < min.length) {
            min = el;
        }
    }
    console.log(min)

}
task4("Всем студентам инкубатора желаю удачи!")

//5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение,
// где все слова написаны строчными, но начинаются с заглавных букв.
// setUpperCase("всем стУдентам инкуБатора Желаю удачИ!") => "Всем Студентам Инкубатора Желаю Удачи!"


function task5 (a){
    const str = a.toLowerCase()
    console.log(str.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()}))
}
task5("всем стУдентам инкуБатора Желаю удачИ!")


//6. Реализуйте функцию, котрая принимает параметрами строку и подстроку. Если все
// символы подстроки содержаться в стороке - возвращает true, если нет -
// возвращает false. Проверка проводится без учёта регистра и без учётом
// повторяющихся символов.
//* попробовать учитывать повтор символов в подстроке



// isIncludes("Incubator", "Cut") => true
// isIncludes("Incubator", "table") => false
// isIncludes("Incubator", "inbba") => true
// isIncludes("Incubator", "inba") => true
// isIncludes("Incubator", "Incubatorrr")=> true