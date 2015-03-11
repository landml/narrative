require.config({
    // urlArgs: "v=" + (new Date()).getTime(),
    baseUrl: 'static',
    waitSeconds : 30,
    paths : {
    	'jquery' 							: 'components/jquery/jquery.min',
//                'jquery'      						: 'kbase/js/ui-common/ext/jquery/jquery-1.10.2.min',
		'jqueryui'							: 'components/jquery-ui/ui/minified/jquery-ui.min',
//                'jqueryui'    						: 'kbase/js/ui-common/ext/jquery-ui/1.10.3/js/jquery-ui-1.10.3.custom.min',
		'bootstrap'							: 'components/bootstrap-3/bootstrap.min',
//                'bootstrap'   						: "kbase/js/ui-common/ext/bootstrap/3.1.1/js/bootstrap.min",
		'underscore'						: 'components/underscore/1.8.2/underscore-min',
		// 'kbaseNarrative'					: 'kbase/js/kbaseNarrative',
		'kbaseNarrativeCellMenu'			: 'kbase/js/widgets/narrative_core/kbaseNarrativeCellMenu',
		'kbaseNarrativeControlPanel'		: 'kbase/js/widgets/narrative_core/kbaseNarrativeControlPanel',
		'kbaseNarrativeDataPanel'			: 'kbase/js/widgets/narrative_core/kbaseNarrativeDataPanel',
		'kbaseNarrativeDataList'			: 'kbase/js/widgets/narrative_core/kbaseNarrativeDataList',
		'kbaseNarrativeSidePanel'			: 'kbase/js/widgets/narrative_core/kbaseNarrativeSidePanel',
		'kbaseNarrativeJobsPanel'			: 'kbase/js/widgets/narrative_core/kbaseNarrativeJobsPanel',
		'kbaseNarrativeMethodPanel'			: 'kbase/js/widgets/narrative_core/kbaseNarrativeMethodPanel',
		'kbaseNarrativeManagePanel'			: 'kbase/js/widgets/narrative_core/kbaseNarrativeManagePanel',
		
        'd3'          						: 'kbase/js/ui-common/ext/d3/d3.v3.min',
        'colorbrewer' 						: 'kbase/js/ui-common/ext/colorbrewer/colorbrewer',
        'handlebars'  						: 'kbase/js/ui-common/ext/handlebars/handlebars-v1.3.0',
		'CDMI_API'                          : 'kbase/js/ui-common/src/widgets/../js/CDMI_API',
        'narrativeMethodStore'              : 'kbase/js/ui-common/src/widgets/../js/narrativeMethodStore',
		'IdMapClient'                       : 'kbase/js/ui-common/src/widgets/../js/IdMapClient',
		'KbaseNetworkServiceClient'         : 'kbase/js/ui-common/src/widgets/../js/KbaseNetworkServiceClient',
		'MetaTool'                          : 'kbase/js/ui-common/src/widgets/../js/MetaTool',
		'OntologyServiceClient'             : 'kbase/js/ui-common/src/widgets/../js/OntologyServiceClient',
		'RGBColor'                          : 'kbase/js/ui-common/src/widgets/../js/RGBColor',
		'geometry_point'                    : 'kbase/js/ui-common/src/widgets/../js/geometry/geometry_point',
		'geometry_rectangle'                : 'kbase/js/ui-common/src/widgets/../js/geometry/geometry_rectangle',
		'geometry_size'                     : 'kbase/js/ui-common/src/widgets/../js/geometry/geometry_size',
		'Client'                            : 'kbase/js/ui-common/src/widgets/../js/workspaceService/Client',
		'kbapplication'                     : 'kbase/js/ui-common/src/widgets/../kbapplication',
		'kbwidget'                          : 'kbase/js/ui-common/src/widgets/../kbwidget',
		'all'                               : 'kbase/js/ui-common/src/widgets/all',
		'jim'                               : 'kbase/js/ui-common/src/widgets/jim',
		'kbaseBambiMotifCard'               : 'kbase/js/ui-common/src/widgets/bambi/kbaseBambiMotifCard',
		'kbaseBambiRawOutputCard'           : 'kbase/js/ui-common/src/widgets/bambi/kbaseBambiRawOutputCard',
		'kbaseBambiRunParametersCard'       : 'kbase/js/ui-common/src/widgets/bambi/kbaseBambiRunParametersCard',
		'kbaseBambiRunResultCard'           : 'kbase/js/ui-common/src/widgets/bambi/kbaseBambiRunResultCard',
		'kbaseBioCpdTable'                  : 'kbase/js/ui-common/src/widgets/biochemistry/kbaseBioCpdTable',
		'kbaseBioRxnTable'                  : 'kbase/js/ui-common/src/widgets/biochemistry/kbaseBioRxnTable',
		'kbaseCpd'                          : 'kbase/js/ui-common/src/widgets/biochemistry/kbaseCpd',
		'kbaseRxn'                          : 'kbase/js/ui-common/src/widgets/biochemistry/kbaseRxn',
		'kbaseRxnModal'                     : 'kbase/js/ui-common/src/widgets/biochemistry/kbaseRxnModal',
		'kbaseCmonkeyClusterCard'           : 'kbase/js/ui-common/src/widgets/cmonkey/kbaseCmonkeyClusterCard',
		'kbaseCmonkeyMotifCard'             : 'kbase/js/ui-common/src/widgets/cmonkey/kbaseCmonkeyMotifCard',
		'kbaseCmonkeyRunResultCard'         : 'kbase/js/ui-common/src/widgets/cmonkey/kbaseCmonkeyRunResultCard',
		'kbaseExpressionSeries'             : 'kbase/js/ui-common/src/widgets/expression/kbaseExpressionSeries',
		'kbaseFbaMeta'                      : 'kbase/js/ui-common/src/widgets/fbas/kbaseFbaMeta',
		'kbaseFbaTabs'                      : 'kbase/js/ui-common/src/widgets/fbas/kbaseFbaTabs',
		'kbaseFormulationForm'              : 'kbase/js/ui-common/src/widgets/fbas/kbaseFormulationForm',
		'kbaseRunFba'                       : 'kbase/js/ui-common/src/widgets/fbas/kbaseRunFba',
		'kbaseContigBrowser'                : 'kbase/js/ui-common/src/widgets/genomes/kbaseContigBrowser',
		//'kbaseContigBrowserButtons'         : 'kbase/js/ui-common/src/widgets/genomes/kbaseContigBrowserButtons',
		'kbaseGeneBiochemistry'             : 'kbase/js/ui-common/src/widgets/genomes/kbaseGeneBiochemistry',
		'kbaseGeneDomains'                  : 'kbase/js/ui-common/src/widgets/genomes/kbaseGeneDomains',
		'kbaseGeneInfo'                     : 'kbase/js/ui-common/src/widgets/genomes/kbaseGeneInfo',
		'kbaseGeneInstanceInfo'             : 'kbase/js/ui-common/src/widgets/genomes/kbaseGeneInstanceInfo',
		'kbaseGeneOperon'                   : 'kbase/js/ui-common/src/widgets/genomes/kbaseGeneOperon',
		'kbaseGeneSequence'                 : 'kbase/js/ui-common/src/widgets/genomes/kbaseGeneSequence',
		'kbaseGenomeLineage'                : 'kbase/js/ui-common/src/widgets/genomes/kbaseGenomeLineage',
		'kbaseGenomeOverview'               : 'kbase/js/ui-common/src/widgets/genomes/kbaseGenomeOverview',
		'kbaseLitWidget'                    : 'kbase/js/ui-common/src/widgets/genomes/kbaseLitWidget',
		'kbaseMultiContigBrowser'           : 'kbase/js/ui-common/src/widgets/genomes/kbaseMultiContigBrowser',
		'kbaseObjectMeta'                   : 'kbase/js/ui-common/src/widgets/genomes/kbaseObjectMeta',
		//'kbasePhenotypeSet'                 : 'kbase/js/ui-common/src/widgets/genomes/kbasePhenotypeSet',
		//'kbaseSEEDFunctions'                : 'kbase/js/ui-common/src/widgets/genomes/kbaseSEEDFunctions',
		//'kbaseSimulationSet'                : 'kbase/js/ui-common/src/widgets/genomes/kbaseSimulationSet',
		'kbaseWikiDescription'              : 'kbase/js/ui-common/src/widgets/genomes/kbaseWikiDescription',
		'kbaseGWASGeneListTable'            : 'kbase/js/ui-common/src/widgets/gwas/kbaseGWASGeneListTable',
		'kbaseGWASPop'                      : 'kbase/js/ui-common/src/widgets/gwas/kbaseGWASPop',
		'kbaseGWASPopMaps'                  : 'kbase/js/ui-common/src/widgets/gwas/kbaseGWASPopMaps',
		'kbaseGWASPopTable'                 : 'kbase/js/ui-common/src/widgets/gwas/kbaseGWASPopTable',
		'kbaseGWASTopVariations'            : 'kbase/js/ui-common/src/widgets/gwas/kbaseGWASTopVariations',
		'kbaseGWASTopVariationsTable'       : 'kbase/js/ui-common/src/widgets/gwas/kbaseGWASTopVariationsTable',
		'kbaseGWASTraitMaps'                : 'kbase/js/ui-common/src/widgets/gwas/kbaseGWASTraitMaps',
		'kbaseGWASTraitTable'               : 'kbase/js/ui-common/src/widgets/gwas/kbaseGWASTraitTable',
		'kbaseGWASVarTable'                 : 'kbase/js/ui-common/src/widgets/gwas/kbaseGWASVarTable',
		'kbaseInferelatorHitsCard'          : 'kbase/js/ui-common/src/widgets/inferelator/kbaseInferelatorHitsCard',
		'kbaseInferelatorRunResultCard'     : 'kbase/js/ui-common/src/widgets/inferelator/kbaseInferelatorRunResultCard',
		'kbaseIrisTerminalDispatch'         : 'kbase/js/ui-common/src/widgets/iris/config/kbaseIrisTerminalDispatch',
		'kbaseIrisTerminalDispatchAuth'     : 'kbase/js/ui-common/src/widgets/iris/config/kbaseIrisTerminalDispatchAuth',
		'kbaseIrisTerminalDispatchEnv'      : 'kbase/js/ui-common/src/widgets/iris/config/kbaseIrisTerminalDispatchEnv',
		'kbaseIrisTerminalDispatchFile'     : 'kbase/js/ui-common/src/widgets/iris/config/kbaseIrisTerminalDispatchFile',
		'kbaseIrisTerminalDispatchHelp'     : 'kbase/js/ui-common/src/widgets/iris/config/kbaseIrisTerminalDispatchHelp',
		'kbaseIrisTerminalDispatchHistory'  : 'kbase/js/ui-common/src/widgets/iris/config/kbaseIrisTerminalDispatchHistory',
		'kbaseIrisTerminalDispatchScript'   : 'kbase/js/ui-common/src/widgets/iris/config/kbaseIrisTerminalDispatchScript',
		'kbaseIrisTerminalDispatchTutorial' : 'kbase/js/ui-common/src/widgets/iris/config/kbaseIrisTerminalDispatchTutorial',
		'iris'                              : 'kbase/js/ui-common/src/widgets/iris/iris',
		'kbaseIrisCommands'                 : 'kbase/js/ui-common/src/widgets/iris/kbaseIrisCommands',
		'kbaseIrisConfig'                   : 'kbase/js/ui-common/src/widgets/iris/kbaseIrisConfig',
		'kbaseIrisContainerWidget'          : 'kbase/js/ui-common/src/widgets/iris/kbaseIrisContainerWidget',
		'kbaseIrisEchoWidget'               : 'kbase/js/ui-common/src/widgets/iris/kbaseIrisEchoWidget',
		'kbaseIrisFileBrowser'              : 'kbase/js/ui-common/src/widgets/iris/kbaseIrisFileBrowser',
		'kbaseIrisFileEditor'               : 'kbase/js/ui-common/src/widgets/iris/kbaseIrisFileEditor',
		'kbaseIrisGUIWidget'                : 'kbase/js/ui-common/src/widgets/iris/kbaseIrisGUIWidget',
		'kbaseIrisGrammar'                  : 'kbase/js/ui-common/src/widgets/iris/kbaseIrisGrammar',
		'kbaseIrisProcessList'              : 'kbase/js/ui-common/src/widgets/iris/kbaseIrisProcessList',
		'kbaseIrisTerminal'                 : 'kbase/js/ui-common/src/widgets/iris/kbaseIrisTerminal',
		'kbaseIrisTerminalWidget'           : 'kbase/js/ui-common/src/widgets/iris/kbaseIrisTerminalWidget',
		'kbaseIrisTextWidget'               : 'kbase/js/ui-common/src/widgets/iris/kbaseIrisTextWidget',
		'kbaseIrisTutorial'                 : 'kbase/js/ui-common/src/widgets/iris/kbaseIrisTutorial',
		'kbaseIrisWhatsNew'                 : 'kbase/js/ui-common/src/widgets/iris/kbaseIrisWhatsNew',
		'kbaseIrisWidget'                   : 'kbase/js/ui-common/src/widgets/iris/kbaseIrisWidget',
		'kbaseIrisWorkspace'                : 'kbase/js/ui-common/src/widgets/iris/kbaseIrisWorkspace',
		'jquery.kbase.ws-selector'          : 'kbase/js/ui-common/src/widgets/jquery.kbase.ws-selector',
		'kbaseAccordion'                    : 'kbase/js/ui-common/src/widgets/kbaseAccordion',
		'kbaseAuthenticatedWidget'          : 'kbase/js/ui-common/src/widgets/kbaseAuthenticatedWidget',
		'kbaseBox'                          : 'kbase/js/ui-common/src/widgets/kbaseBox',
		'kbaseButtonControls'               : 'kbase/js/ui-common/src/widgets/kbaseButtonControls',
		'kbaseCardLayoutManager'            : 'kbase/js/ui-common/src/widgets/kbaseCardLayoutManager',
		'kbaseDataBrowser'                  : 'kbase/js/ui-common/src/widgets/kbaseDataBrowser',
		'kbaseDeletePrompt'                 : 'kbase/js/ui-common/src/widgets/kbaseDeletePrompt',
		'kbaseErrorPrompt'                  : 'kbase/js/ui-common/src/widgets/kbaseErrorPrompt',
		'kbaseFormBuilder'                  : 'kbase/js/ui-common/src/widgets/kbaseFormBuilder',
        'kbaseGeneTable'                    : 'kbase/js/ui-common/src/widgets/kbaseGeneTable',
		'kbaseLogin'                        : 'kbase/js/ui-common/src/widgets/kbaseLogin',
		'kbaseLoginFuncSite'                : 'kbase/js/ui-common/src/widgets/kbaseLoginFuncSite',
        'kbaseMethodGallery'                : 'kbase/js/ui-common/src/widgets/kbaseMethodGallery',
        'kbasePopularMethods'                : 'kbase/js/ui-common/src/widgets/kbasePopularMethods',
        'kbaseWalkablePath'                : 'kbase/js/ui-common/src/widgets/kbaseWalkablePath',
        'kbaseCarousel'                : 'kbase/js/ui-common/src/widgets/kbaseCarousel',
        'kbaseMethodDescription'                : 'kbase/js/ui-common/src/widgets/kbaseMethodDescription',
		'kbaseModal'                        : 'kbase/js/ui-common/src/widgets/kbaseModal',
		'kbasePanel'                        : 'kbase/js/ui-common/src/widgets/kbasePanel',
		'kbasePrompt'                       : 'kbase/js/ui-common/src/widgets/kbasePrompt',
		'kbaseSearchControls'               : 'kbase/js/ui-common/src/widgets/kbaseSearchControls',
		'kbaseTable'                        : 'kbase/js/ui-common/src/widgets/kbaseTable',
		'kbaseTabs'                         : 'kbase/js/ui-common/src/widgets/kbaseTabs',
		'kbaseVisWidget'                    : 'kbase/js/ui-common/src/widgets/kbaseVisWidget',
		'Heatmap_widget'                    : 'kbase/js/ui-common/src/widgets/mak/Heatmap_widget',
		'LineChart_widget'                  : 'kbase/js/ui-common/src/widgets/mak/LineChart_widget',
		'Tiling_widget'                     : 'kbase/js/ui-common/src/widgets/mak/Tiling_widget',
		'kbaseBarChartCard'                 : 'kbase/js/ui-common/src/widgets/mak/kbaseBarChartCard',
		'kbaseHeatmapCard'                  : 'kbase/js/ui-common/src/widgets/mak/kbaseHeatmapCard',
		'kbaseJSONReflector'                : 'kbase/js/ui-common/src/widgets/kbaseJSONReflector',
		'kbaseLineChartCard'                : 'kbase/js/ui-common/src/widgets/mak/kbaseLineChartCard',
		'kbaseMAKBiclusterCard'             : 'kbase/js/ui-common/src/widgets/mak/kbaseMAKBiclusterCard',
		'kbaseMAKResultCard'                : 'kbase/js/ui-common/src/widgets/mak/kbaseMAKResultCard',
		'kbaseMAKTilingCard'                : 'kbase/js/ui-common/src/widgets/mak/kbaseMAKTilingCard',
		'kbasePathway'                      : 'kbase/js/ui-common/src/widgets/maps/kbasePathway',
		'kbaseMediaEditor'                  : 'kbase/js/ui-common/src/widgets/media/kbaseMediaEditor',
		'kbaseMastHitsCard'                 : 'kbase/js/ui-common/src/widgets/meme/kbaseMastHitsCard',
		'kbaseMastRunParametersCard'        : 'kbase/js/ui-common/src/widgets/meme/kbaseMastRunParametersCard',
		'kbaseMastRunResultCard'            : 'kbase/js/ui-common/src/widgets/meme/kbaseMastRunResultCard',
		'kbaseMemeMotifCard'                : 'kbase/js/ui-common/src/widgets/meme/kbaseMemeMotifCard',
		'kbaseMemeRawOutputCard'            : 'kbase/js/ui-common/src/widgets/meme/kbaseMemeRawOutputCard',
		'kbaseMemeRunParametersCard'        : 'kbase/js/ui-common/src/widgets/meme/kbaseMemeRunParametersCard',
		'kbaseMemeRunResultCard'            : 'kbase/js/ui-common/src/widgets/meme/kbaseMemeRunResultCard',
		'kbaseMemeTable'                    : 'kbase/js/ui-common/src/widgets/meme/kbaseMemeTable',
		'kbaseTomtomHitsCard'               : 'kbase/js/ui-common/src/widgets/meme/kbaseTomtomHitsCard',
		'kbaseTomtomRunParametersCard'      : 'kbase/js/ui-common/src/widgets/meme/kbaseTomtomRunParametersCard',
		'kbaseTomtomRunResultCard'          : 'kbase/js/ui-common/src/widgets/meme/kbaseTomtomRunResultCard',
		'logo'                              : 'kbase/js/ui-common/src/widgets/meme/logo',
		'kbaseSeqSearch'                    : 'kbase/js/ui-common/src/widgets/misc/kbaseSeqSearch',
		'kbaseDeleteRxn'                    : 'kbase/js/ui-common/src/widgets/models/kbaseDeleteRxn',
		//'kbaseModelCore'                    : 'kbase/js/ui-common/src/widgets/models/kbaseModelCore',
		'kbaseModelMeta'                    : 'kbase/js/ui-common/src/widgets/models/kbaseModelMeta',
		'kbaseModelOpts'                    : 'kbase/js/ui-common/src/widgets/models/kbaseModelOpts',
		'kbaseModelTable'                   : 'kbase/js/ui-common/src/widgets/models/kbaseModelTable',
		//'kbaseModelTabs'                    : 'kbase/js/ui-common/src/widgets/models/kbaseModelTabs',
		'force-directed'                    : 'kbase/js/ui-common/src/widgets/networks/force-directed',
		'kbaseNetworkCard'                  : 'kbase/js/ui-common/src/widgets/networks/kbaseNetworkCard',
		'kbasePPICard'                      : 'kbase/js/ui-common/src/widgets/networks/kbasePPICard',
		'kbaseWSObjGraphCenteredView'       : 'kbase/js/ui-common/src/widgets/objgraphs/kbaseWSObjGraphCenteredView',
		'kbaseWSObjGraphView'               : 'kbase/js/ui-common/src/widgets/objgraphs/kbaseWSObjGraphView',
		'kbaseRegulomeCard'                 : 'kbase/js/ui-common/src/widgets/regprecise/kbaseRegulomeCard',
		'kbaseRegulonCard'                  : 'kbase/js/ui-common/src/widgets/regprecise/kbaseRegulonCard',
		//'kbasePromConstraint'               : 'kbase/js/ui-common/src/widgets/regulation/kbasePromConstraint',
		'kbaseRegulome'                     : 'kbase/js/ui-common/src/widgets/regulation/kbaseRegulome',
		'kbaseNarrativesUsingData'          : 'kbase/js/ui-common/src/widgets/social/kbaseNarrativesUsingData',
		'kbaseWSObjRefUsers'                : 'kbase/js/ui-common/src/widgets/social/kbaseWSObjRefUsers',
		'kbaseSpecFunctionCard'             : 'kbase/js/ui-common/src/widgets/spec/kbaseSpecFunctionCard',
		'kbaseSpecModuleCard'               : 'kbase/js/ui-common/src/widgets/spec/kbaseSpecModuleCard',
		'kbaseSpecStorageCard'              : 'kbase/js/ui-common/src/widgets/spec/kbaseSpecStorageCard',
		'kbaseSpecTypeCard'                 : 'kbase/js/ui-common/src/widgets/spec/kbaseSpecTypeCard',
		'kbaseTaxonOverview'                : 'kbase/js/ui-common/src/widgets/taxa/kbaseTaxonOverview',
		//'kbaseTree'                         : 'kbase/js/ui-common/src/widgets/trees/kbaseTree',
		'kbaseBarchart'                     : 'kbase/js/ui-common/src/widgets/vis/kbaseBarchart',
		'kbaseHistogram'                     : 'kbase/js/ui-common/src/widgets/vis/kbaseHistogram',
		'kbaseChordchart'                   : 'kbase/js/ui-common/src/widgets/vis/kbaseChordchart',
		'kbaseCircularHeatmap'              : 'kbase/js/ui-common/src/widgets/vis/kbaseCircularHeatmap',
		'kbaseForcedNetwork'                : 'kbase/js/ui-common/src/widgets/vis/kbaseForcedNetwork',
		'kbaseHeatmap'                      : 'kbase/js/ui-common/src/widgets/vis/kbaseHeatmap',
		'kbaseLineSerieschart'              : 'kbase/js/ui-common/src/widgets/vis/kbaseLineSerieschart',
		'kbaseLinechart'                    : 'kbase/js/ui-common/src/widgets/vis/kbaseLinechart',
		'kbasePiechart'                     : 'kbase/js/ui-common/src/widgets/vis/kbasePiechart',
		'kbaseScatterplot'                  : 'kbase/js/ui-common/src/widgets/vis/kbaseScatterplot',
		'kbaseTreechart'                    : 'kbase/js/ui-common/src/widgets/vis/kbaseTreechart',
		'kbaseVenndiagram'                  : 'kbase/js/ui-common/src/widgets/vis/kbaseVenndiagram',
		'kbasePlantsNTO'                    : 'kbase/js/ui-common/src/widgets/vis/plants/kbasePlantsNTO',
		'kbasePlantsNetworkNarrative'       : 'kbase/js/ui-common/src/widgets/vis/plants/kbasePlantsNetworkNarrative',
		'kbasePlantsNetworkTable'           : 'kbase/js/ui-common/src/widgets/vis/plants/kbasePlantsNetworkTable',
		'vis'                               : 'kbase/js/ui-common/src/widgets/vis/vis',
		'kbaseSimpleWSSelect'               : 'kbase/js/ui-common/src/widgets/workspaces/kbaseSimpleWSSelect',
		'kbaseWSFbaTable'                   : 'kbase/js/ui-common/src/widgets/workspaces/kbaseWSFbaTable',
		'kbaseWSHandler'                    : 'kbase/js/ui-common/src/widgets/workspaces/kbaseWSHandler',
		'kbaseWSMediaTable'                 : 'kbase/js/ui-common/src/widgets/workspaces/kbaseWSMediaTable',
		'kbaseWSModelTable'                 : 'kbase/js/ui-common/src/widgets/workspaces/kbaseWSModelTable',
		'kbaseWSObjectTable'                : 'kbase/js/ui-common/src/widgets/workspaces/kbaseWSObjectTable',
		'kbaseWSReferenceList'              : 'kbase/js/ui-common/src/widgets/workspaces/kbaseWSReferenceList',
		'kbaseWSSelector'                   : 'kbase/js/ui-common/src/widgets/workspaces/kbaseWSSelector',
    },
    shim : {
        bootstrap : { 
        	deps : ["jquery"] 
        },
        underscore : {
        	exports : '_'
        },
    }
});