// import React from 'react'

// const QuesList = () => {
  const Quizlist=[{
         id:"1",
        ques:"1.  In Pandas _______________ is used to store data in multiple columns.",
        option:["Series","DataFrame","Both of the above","None of the above"],
        ans:"DataFrame",

    },{
        id:"2",
        ques:" 2. Which library is to be imported for creating DataFrame?",
        option:[" Python","DataFrame","Pandas","Random"],
        ans:"Pandas"

    },{
        id:"3",
        ques:" 3. We can create DataFrame from _____",
        option:["Numpy arrays","List of Dictionaries","Dictionary of Lists","All of the above"],
        ans:"All of the above",
    },{
        id:"4",
        ques:" 4. When we create DataFrame from List of Dictionaries, then dictionary keys will become ____________",
        option:[" Column labels"," Row labels","Both of the above","None of the above"],
        ans:" Column labels"

    },{
        id:"5",
        ques:" 5. In given code dataframe ‘D1’ has ________ rows and _______ columns.  import pandas as pd LoD = [{‘a’:10, ‘b’:20}, {‘a’:5, ‘b’:10, ‘c’:20},{‘a’:7, ‘d’:10, ‘e’:20}] D1 = pd.DataFrame(LoD)",
        option:["3,3"," 3,4","3,5","None of the above"],
        ans:"3,5",
    },{
        id:"6",
        ques:" 6. D1[ : ] = 77 , will set __________ values of a Data Frame ‘D1’ to 77.",
        option:["Only First Row","Only First Column","All","None of the above"],
        ans:"All"

    },{
        id:"7",
        ques:" 7. The following statement will _________",
        option:["delete three columns having labels ‘Name’, ‘Class’ and ‘Rollno’","delete three rows having labels ‘Name’, ‘Class’ and ‘Rollno’","delete any three columns","return error"],
        ans:"delete three columns having labels ‘Name’, ‘Class’ and ‘Rollno’",
    },{
        id:"8",
        ques:" 8.  Which method is used to change the labels of rows and columns in DataFrame?",
        option:["change( )","rename( )","replace( )","None of the above"],
        ans:"rename( )"

    },{
        id:"9",
        ques:" 9. Which of the following parameter is used to specify row or column in rename function of DataFrame?",
        option:["rowindex","colindex","Both of the above","index"],
        ans:"index",
    },{
        id:"10",
        ques:" 10. We can use the ______ method to merge two DataFrames",
        option:["merge( )","join( )","append( )","drop( )"],
        ans:"append( )"

    },{
        id:"11",
        ques:" 11. We can merge/join only those DataFrames which have same number of columns.(T/F)",
        option:["True","False"],
        ans:"False",
    },{
        id:"12",
        ques:" 12. Which of the following statement is Transposing the DataFrame ‘DF1’?",
        option:["DF1.transpose","DF1.T","DF1.Trans","DF1.t"],
        ans:"DF1.T"

    },{
        id:"13",
        ques:" 13. Which of the following function is used to load the data from the CSV file into a DataFrame?",
        option:[" read.csv( )","readcsv( )","read_csv( )","Read_csv( )"],
        ans:"read_csv( )",
    },{
        id:"14",
        ques:" 14. Display last two rows from dataframe ‘DF’?",
        option:["print(DF[-2 : -1])"," print(DF.iloc[-2 : -1])"," print(DF.tail(2))","All of the above"],
        ans:" print(DF.tail(2))"

    },{
        id:"15",
        ques:" 15.  Write a statement to add new column for another year ‘2018’ with values 55000, 65000, 75000, 85000, 95000",
        option:["DF[2018] = 55000, 65000, 75000, 85000, 95000","DF[2018] = [55000, 65000, 75000, 85000, 95000]"," DF[2018] = (55000, 65000, 75000, 85000, 95000)","All of the above"],
        ans:"All of the above",
    },{
        id:"16",
        ques:" 16.   Display first row of dataframe ‘DF’",
        option:["print(DF.head(1))","print(DF[0 : 1])","print(DF.iloc[0 : 1])","All of the above"],
        ans:"All of the above",
    }
]
    export default Quizlist;
//     return (
//         <div>
            
//         </div>
//     )
// }

// export default QuesList
