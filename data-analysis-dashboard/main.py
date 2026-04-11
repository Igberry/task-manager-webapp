from analysis import (
    load_data,
    clean_data,
    add_average_column,
    get_summary,
    group_by_pass_status
)

from visualization import (
    plot_subject_averages,
    plot_pass_distribution,
    plot_hours_vs_average
)

def main():
    # Load data
    df = load_data("data/students.csv")

    # Clean data
    df = clean_data(df)

    # Add calculated column
    df = add_average_column(df)

    # Summary statistics
    summary = get_summary(df)
    print("\n===== DATA SUMMARY =====")
    for key, value in summary.items():
        print(f"{key}: {value}")

    print("\n===== PASS STATUS AVERAGE =====")
    print(group_by_pass_status(df))

    # Visualizations
    plot_subject_averages(df)
    plot_pass_distribution(df)
    plot_hours_vs_average(df)

if __name__ == "__main__":
    main()