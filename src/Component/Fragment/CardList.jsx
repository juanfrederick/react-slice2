import Card from "../Element/Card";
import CardLi from "../Element/CardLi";

function CardList() {
  return (
    <div className="card-list">
      <Card
        title="Starter"
        text="Ideal for freelancers and contractors just starting out."
        price="24"
        per="/MONTH"
      >
        <CardLi text="All Templates" />
        <CardLi text="Unlimited Clients & Projects" />
        <CardLi text="Invoicing & Payments" />
        <CardLi text="Proposals & Contracts" />
        <CardLi text="Tasks & Time Tracking" />
        <CardLi text="Client CRM" />
        <CardLi text="Expense Tracking" />
        <CardLi text="Up to 5 Project Collaborators" />
      </Card>

      <Card
        title="Professional"
        text="Everything a growing independent business needs to thrive."
        price="39"
        per="/MONTH"
      >
        <CardLi text="Everything in Starter plus..." />
        <CardLi text="Custom Branding" />
        <CardLi text="Forms & Questionnaires" />
        <CardLi text="Workflow Automations" />
        <CardLi text="Client Portal" />
        <CardLi text="QuickBooks Integration" />
        <CardLi text="Calendly Integration" />
        <CardLi text="Zapier Integration" />
        <CardLi text="Up to 15 Project Collaborators" />
      </Card>

      <Card
        title="Business"
        text="The perfect package for small businesses and agencies."
        price="79"
        per="/MONTH"
      >
        <CardLi text="Everything in Starter and Professional plus..." />
        <CardLi text="Subcontractor Management" />
        <CardLi text="Hiring Agreement Templates (1099 contracts)" />
        <CardLi text="Subcontractor Onboarding" />
        <CardLi text="Talent Pool" />
        <CardLi text="3 Team Seats (additional seats $9/month)" />
        <CardLi text="Accountant Access" />
        <CardLi text="Unlimited Subcontractors" />
        <CardLi text="Unlimited Project Collaborators" />
      </Card>
    </div>
  );
}

export default CardList;
