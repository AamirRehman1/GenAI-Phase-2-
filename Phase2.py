import tkinter as tk
from tkinter import ttk

def create_project():
    project_name = project_entry.get()
    if project_name:
        # Destroy all widgets in the frame
        for widget in frame.winfo_children():
            widget.destroy()

        # Display the project name slightly down from the top with Futura font
        project_label = ttk.Label(root, text=project_name, font=("Futura", 30))
        project_label.place(relx=0.5, rely=0.02, anchor="n")  # Adjusted rely value

        # Display text below the project label
        additional_text = ttk.Label(root, text="Click the plus button to add an object to the top level of your WBS:")
        additional_text.place(relx=0.5, rely=0.1, anchor="n")  # Adjusted rely value

        # Square button with plus sign
        plus_button = ttk.Button(root, text="+", command=add_input_field)
        plus_button.place(relx=0.5, rely=0.18, anchor="n")  # Adjusted rely value

        root.title(project_name)
        print(f"{project_name}")
    else:
        print("Please enter a project name.")

def add_input_field():
    # Create an entry field
    entry_field = ttk.Entry(frame, width=40)
    entry_field.grid(row=3, column=0, columnspan=2, pady=(10, 0))

    # Create a button to submit the entry
    submit_button = ttk.Button(frame, text="Enter", command=lambda: display_text(entry_field.get()))
    submit_button.grid(row=4, column=0, columnspan=2, pady=(5, 0))

def display_text(entered_text):
    # Display the entered text
    displayed_text = ttk.Label(root, text=entered_text, font=("Helvetica", 12))
    displayed_text.place(relx=0.5, rely=0.25, anchor="n")  # Adjusted rely value

# Create the main window
root = tk.Tk()
root.title("Project Creator")

# Set a larger fixed size for the window
root.geometry("1100x750")  # Adjust the width and height as needed

# Create a frame for the input elements with increased padding
frame = ttk.Frame(root, padding="30")
frame.place(relx=0.5, rely=0.5, anchor="center")

# Label for project name
label = ttk.Label(frame, text="Enter the name of your project:")
label.grid(row=0, column=0, columnspan=2, pady=(20, 5))  # Adjusted pady

# Entry field for project name
project_entry = ttk.Entry(frame, width=40)  # Adjust the width as needed
project_entry.grid(row=1, column=0, columnspan=2, pady=(0, 20), padx=20)  # Added padx for some space on the sides

# Button to create project
create_button = ttk.Button(frame, text="Create Project", command=create_project)
create_button.grid(row=2, column=0, columnspan=2)

root.mainloop()
