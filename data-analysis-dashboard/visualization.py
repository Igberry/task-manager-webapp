import matplotlib.pyplot as plt

def plot_subject_averages(df):
    subjects = ["Math", "English", "Science"]
    averages = [df[sub].mean() for sub in subjects]

    plt.figure()
    plt.bar(subjects, averages)
    plt.title("Average Score per Subject")
    plt.xlabel("Subjects")
    plt.ylabel("Average Score")
    plt.savefig("outputs/subject_averages.png")
    plt.show()

def plot_pass_distribution(df):
    pass_counts = df["Passed"].value_counts()

    plt.figure()
    plt.pie(pass_counts, labels=pass_counts.index, autopct="%1.1f%%")
    plt.title("Pass vs Fail Distribution")
    plt.savefig("outputs/pass_distribution.png")
    plt.show()

def plot_hours_vs_average(df):
    plt.figure()
    plt.scatter(df["Hours_Studied"], df["Average"])
    plt.title("Study Hours vs Average Score")
    plt.xlabel("Hours Studied")
    plt.ylabel("Average Score")
    plt.savefig("outputs/hours_vs_score.png")
    plt.show()