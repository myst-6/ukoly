from datetime import datetime, timedelta


def mayan_to_gregorian(baktun, katun, tun, uinal, kin):
    # Convert Mayan date to total days since the reference date
    reference_date = datetime(2000, 1, 1)

    days_in_uinal = 20
    days_in_tun = 18 * days_in_uinal
    days_in_katun = 20 * days_in_tun
    days_in_baktun = 20 * days_in_katun

    total_days = (
            (baktun - 13) * days_in_baktun +
            (katun - 20) * days_in_katun +
            (tun - 7) * days_in_tun +
            (uinal - 16) * days_in_uinal +
            (kin - 3)
    )

    target_date = datetime.date(reference_date + timedelta(days=total_days))

    return target_date.day, target_date.month, target_date.year


if __name__ == "__main__":
    nums = map(int, input().split())
    print(*mayan_to_gregorian(*nums))
