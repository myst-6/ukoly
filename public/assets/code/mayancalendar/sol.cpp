#include <iostream>
#include <vector>
#include <tuple>

using namespace std;

bool isLeapYear(int year) {
    return (year % 4 == 0);
}

int daysInMonth(int year, int month) {
    vector<int> days_in_months = {31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
    if (month == 2 && isLeapYear(year)) {
        return 29;
    }
    return days_in_months[month - 1];
}

tuple<int, int, int> addDaysToDate(int day, int month, int year, int days) {
    while (days > 0) {
        int days_in_current_month = daysInMonth(year, month);
        if (days >= days_in_current_month - day + 1) {
            days -= (days_in_current_month - day + 1);
            if (month == 12) {
                year++;
                month = 1;
            } else {
                month++;
            }
            day = 1;
        } else {
            day += days;
            days = 0;
        }
    }
    return make_tuple(day, month, year);
}

tuple<int, int, int> mayanToGregorian(int baktun, int katun, int tun, int uinal, int kin) {
    int reference_baktun = 13, reference_katun = 20, reference_tun = 7, reference_uinal = 16, reference_kin = 3;
    int reference_day = 1, reference_month = 1, reference_year = 2000;

    int days_in_uinal = 20;
    int days_in_tun = 18 * days_in_uinal;
    int days_in_katun = 20 * days_in_tun;
    int days_in_baktun = 20 * days_in_katun;

    int reference_days = 
        (reference_baktun - 13) * days_in_baktun +
        (reference_katun - 20) * days_in_katun +
        (reference_tun - 7) * days_in_tun +
        (reference_uinal - 16) * days_in_uinal +
        (reference_kin - 3);

    int input_days = 
        (baktun - 13) * days_in_baktun +
        (katun - 20) * days_in_katun +
        (tun - 7) * days_in_tun +
        (uinal - 16) * days_in_uinal +
        (kin - 3);

    int total_days = input_days - reference_days;
    return addDaysToDate(reference_day, reference_month, reference_year, total_days);
}

int main() {
    int baktun, katun, tun, uinal, kin;
    cin >> baktun >> katun >> tun >> uinal >> kin;
    
    auto [day, month, year] = mayanToGregorian(baktun, katun, tun, uinal, kin);
    cout << day << " " << month << " " << year << endl;  // Expected Output: 22 3 2001
    
    return 0;
}
