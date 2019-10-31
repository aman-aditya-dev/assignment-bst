import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(LanguageDetector).init({
	resources: {
		ge: {
			translations: {
				manageCampaign: 'Kampagnen Verwalten',
				upcomingCampaign: 'Kommende Verwalten',
				liveCampaign: 'Live Verwalten',
				pastCampaign: 'Vergangene Verwalten',
				report: 'Verwalten',
				scheduleAgain: 'Wieder Einplanen',
				csv: 'csv',
				viewPricing: 'Preise Anzeigen',
				date: 'DATUM',
				campaign: 'KAMPAGNE',
				view: 'AUSSICHT',
				actions: 'AKTIONEN'
			}
		},
		en: {
			translations: {
				manageCampaign: 'Manage Campaigns',
				upcomingCampaign: 'Upcoming Campaigns',
				liveCampaign: 'Live Campaigns',
				pastCampaign: 'Past Campaigns',
				report: 'Report',
				scheduleAgain: 'Schedule Again',
				csv: 'CSV',
				viewPricing: 'View Pricing',
				date: 'DATE',
				campaign: 'CAMPAIGN',
				view: 'VIEW',
				actions: 'ACTIONS'
			}
		}
	},
	fallbackLng: 'ge',
	debug: true,
	ns: ['translations'],
	defaultNS: 'translations',

	keySeparator: false,

	interpolation: {
		escapeValue: false,
		formatSeparator: ','
	},

	react: {
		wait: true
	}
});

export default i18n;
