# Lucky Draw System

## Lucky Draw Module:
   ### `Description`  
		The **Lucky Draw Spin Wheel** offers an exciting way to select a winner among registered participants. Names are arranged on the wheel, and after a spin, it turns to randomly select the winner. The pointer, which is external to the wheel, stops and highlights the winning name. This method ensures transparency and fairness, while adding an element of fun and anticipation to the process, making it a popular choice for prize draws and giveaways.
   ### `Lucky Draw Schedule` 
		The Lucky Draw can only be Scheduled by authorized persons with role as Leaders.
		A Lucky Draw Schedule will have
		-> Lucky Draw Name:
		-> Date and Time:
		-> Description (optional):
		-> Number of Participants (optional):
		-> Add Members (Optional): <Multi select list of Team Members>
   ### `Conduct Lucky Draw`
		The Lucky Draw can be Conducted by authorized persons with role as Leaders and his team members associated with lukcy draw can conduct the Luck draw.
   ### `Lucky Draw Form`
        A Lucky Draw form has the following fields for the customers to fill in
		
		1. Name (Full Name)
		2. Email Address (for notifications and unique token delivery)
		3. Phone Number (Mandatory)
		4. To select the intrested financial services like using checkboxes 
			- Tax Services
			- Pension and Retirement Services
			- Home loans
			- Business loans
			- Student loans
			- Health insurance
			- Car insurance
			- Liability insurance
			- Disability insurance
			- Electricity Bill Reduction
		5. Checkbox (Mandatory) 
		   I consent to being contacted by Financial Coach regarding the financial services I've opted for via phone, email, or SMS.
		6. Submit Button -> Register the user with "Cusomer" role.
		
	### `Generate Token/Unique Number (8 character)`:
		After successfully registering for the draw, each customer will receive a unique token or reference number.
		This unique token will be sent to the customer's email and displayed on the confirmation page of the application.
		
## User Management Module: 
   ### `Admin` Is the Super User, who can manage all action, including Leaders (create, modify & delete)
   ### `Leader` Has capability to create lucky schedule, Conduct and Manage lucky draws that were created under him.
   ### `Member` Has capability to Conduct lucky schedule by his Leader.
   ### `Cusomer` To register for a lucky draw

    1. Admin:
		Menu: Dashboard, Manage Leaders, Luck Draws (Sub Menu: Schedule, Conduct, Results), Reports,  Approvals (Leaders and Members),  Logout
		
    2. Leader: 
        Menu: Dashboard, Manage Members, Luck Draws (Sub Menu: Schedule, Conduct, Results), Reports, Logout	 
	
    3. Member: 
        Menu: Dashboard, Luck Draws(Sub Menu: Conduct, Results), Logout

## Reports Module
    The admin can generate reports of registered customers, scheduled draws, and winner lists.
    Data can be exported to common formats like CSV or PDF.
