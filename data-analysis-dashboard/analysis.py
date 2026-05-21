import pandas as pd

def load_data(path):
    return pd.read_csv(path)

def clean_data(df):
    df = df.dropna()
    return df

def add_average_column(df):
    df["Average"] = df[["Math", "English", "Science"]].mean(axis=1)
    return df

def get_summary(df):
    summary = {
        "average_score": df["Average"].mean(),
        "highest_score": df["Average"].max(),
        "lowest_score": df["Average"].min(),
        "pass_rate": (df["Passed"] == "Yes").mean() * 100
    }
    return summary

def group_by_pass_status(df):
    return df.groupby("Passed")["Average"].mean()