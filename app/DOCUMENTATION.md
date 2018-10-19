Components
----------

**src/components/App.js**

### 1. App

The most parent component. Composed by the Header, CampaignTab and CampaignDetail
routes and the error screen.   




-----
**src/components/campaignCard/CampaignCard.js**

### 1. CampaignCard

A complex type card presenting resumed data about a campaign. Includes the name, icons of the platforms
the campaign is on, the campaign's goal and a graphic representation of the campaign's budget   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
classes|object|yes||The styling classes
campaign|object|no||The campaign
-----
**src/components/campaignDetail/CampaignDetail.js**

### 1. CampaignDetail

Component responsible for rendering the dashboard of a campaign's platform   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
selectedCampaign|object|no||The specific campaign to be shown
fetchCampaignById|func|no||Action creator to fetch de campaing in case it was not already on the store
match|object|no||The id parameter
classes|object|yes||The styling classes
-----
**src/components/campaignDetail/sectionAudience/SectionAudience.js**

### 1. SectionAudience

Section that presents information on the audience. It includes languages, genders, age, location,
key words and interests   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
classes|object|yes||The styling classes
audience|object|yes||The audience to be presented
-----
**src/components/campaignDetail/sectionCreative/SectionCreative.js**

### 1. SectionCreative

The Section to present the creative part of the campaing. Includes a image, title, description and link   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
classes|object|yes||The styling classes
creatives|object|yes||The creative data to be shown
-----
**src/components/campaignDetail/sectionInsights/SectionInsights.js**

### 1. SectionInsights

Section of the dashboard that presents the insights data. Including impressions, clicks,
website visits, nanos score, cost per click, click through rate and advanceds kip 1/2   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
classes|object|yes||The styling classes
insights|object|yes||The campaign&#x27;s insights
-----
**src/components/campaignDetail/sectionInsights/insight/Insight.js**

### 1. Insight

The single insigth component. It presents a label and a value for the respective insight   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
value|number|yes||The insight value
label|string|yes||The insight label
classes|object|yes||The styling classes
-----
**src/components/campaignDetail/sectionStatus/SectionStatus.js**

### 1. SectionStatus

Section of the dashboard that presents a resume of the campaing. Including headline, start and end dates,
status and a graphic informing the budget situation   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
classes|object|yes||The styling classes
campaign|object|yes||The campaign to be shown its data
-----
**src/components/campaignTab/CampaignTab.js**

### 1. CampaignStatusTab

Component responsivel for grouping and showing campaigns according to their status.
Groups in "Delivering", "Ended", "Scheduled".   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
classes|object|yes||The styling classes
fetchCampaigns|func|no||Action creator to fetch all campaigns
campaigns|array|no||The campaigns to be shown in the tabs
-----
**src/components/campaignTab/tabContainer/TabContainer.js**

### 1. CampaignStatusTabContainer

A container tha holds the campaing cards   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
classes|object|yes||The styling classes
data|any|no||The object where the campaigns are stored
-----
**src/components/error/Error.js**

### 1. Error

Renders whenever necessary to inform the user an error has occured   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
errorOccured|bool|no||Whether should or not render the error
classes|object|yes||The styling classes
errorMessage|string|no||A customizable friendly message
-----
**src/components/graph/Graph.js**

### 1. Graph

Graph component renders a svg graph circle for data visualization   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
total|number|yes||The total amount
remaining|number|yes||The remaining amount
classes|object|yes||The styling classes
label|string|no||A label fot the graph
-----
**src/components/header/Header.js**

### 1. Header

The application header. Presents a link to the homeScreen as well as the app title   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
classes|object|yes||Styling classes.
title|string|yes||Title to be presented
-----

<sub>This document was generated by the <a href="https://github.com/marborkowski/react-doc-generator" target="_blank">**React DOC Generator v1.2.5**</a>.</sub>
