import { SCodeBlock, SText, STitle, SCode, SSubtitle, SList } from "components";

export const MayanCalendar = () => {
  return (
    <>
      <STitle>Idea</STitle>
      <SText>
        The problem requires converting a date given in the Mayan calendar to a corresponding date in our Gregorian calendar. 
        Since the range of Mayan dates provided is relatively small, we can use a direct simulation approach to solve this problem. 
        The key is to compute the number of days between the given Mayan date and a known reference date ($1$ January $2000$) and then convert that number of days into the corresponding Gregorian date.
      </SText>

      <STitle>Solution</STitle>
      <SText>
        The approach involves breaking down the Mayan date into its components: Baktun, Katun, Tun, Uinal, and Kin. 
        By calculating the total number of days represented by these components relative to the reference date, 
        we can determine how many days have passed since $1$ January $2000$ and then compute the corresponding Gregorian date.
      </SText>

      <SSubtitle>Converting the Mayan Date to Days</SSubtitle>
      <SText>
        To convert a Mayan date into a total number of days, we calculate the number of days for each component:
      </SText>
      <SList>
        <SText><SCode>Baktun:</SCode> $20$ Katuns</SText>
        <SText><SCode>Katun:</SCode> $20$ Tuns</SText>
        <SText><SCode>Tun:</SCode> $18$ Uinals</SText>
        <SText><SCode>Uinal:</SCode> $20$ Kins</SText>
        <SText><SCode>Kin:</SCode> $1$ day</SText>
      </SList>
      <SText>
        We start by calculating the number of days from the given Mayan date back to the reference date. 
        Then, we subtract this from the number of days from the reference date to the target date.
      </SText>

      <SSubtitle>Handling the Gregorian Date</SSubtitle>
      <SText>
        Once we have the total number of days, converting this to a Gregorian date requires:
      </SText>
      <SList>
        <SText>Tracking the days, months, and years as we add days to the reference date.</SText>
        <SText>Considering leap years when February is involved.</SText>
      </SList>
      <SText>
        The main challenge is ensuring that the program correctly handles the varying number of days in each month and the presence of leap years.
      </SText>
      <SText>
        The implementation in Python is straightforward, as the language provides a built-in <SCode>datetime</SCode> module that simplifies date calculations,
        including handling leap years and the number of days in each month. However, this has to be done manually in other languages.
      </SText>

      <STitle>Code</STitle>
      <SCodeBlock path="mayancalendar/sol" />
    </>
  );
};
