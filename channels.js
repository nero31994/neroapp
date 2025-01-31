
const channels = {

GTV: {
        name: 'GTV',
        url: 'https://ott.studentsdemo.com/stream/phcathenatv/gtv/master.m3u8?u=phc&p=1ed3395bba4d481a74e631943df9643663da8f300a8edececcb8b7da46349f01',
        type: 'hls'
         }, 
GMA: {
        name: 'GMA',
        url: 'https://ott.studentsdemo.com/stream/phcathenatv/gma/master.m3u8?u=phc&p=1ed3395bba4d481a74e631943df9643663da8f300a8edececcb8b7da46349f01',
        type: 'hls'
         }, 
KAP: {
        name: 'KAPAMILYA',
        url: 'https://ott.studentsdemo.com/stream/phcathenatv/kapamilyachannel/master.m3u8?u=phc&p=1ed3395bba4d481a74e631943df9643663da8f300a8edececcb8b7da46349f01',
        type: 'hls'
         }, 
KAPAMILYA_CHANNEL: {
    name: 'JUST FOR LAUGH',
    url: 'https://epg.provider.plex.tv/library/parts/5e20b730f2f8d5003d739db7-64704954e536e0faaf10be9f/variant.m3u8?x-plex-token=sE38z2Coa9z6BhtRqbPm&x-plex-advertising-identifier=&x-plex-advertising-donottrack=0&x-plex-drm=&x-plex-device-screen-resolution=&x-plex-device-vendor=&x-plex-version=&x-plex-session-id=&x-plex-playback-session-id=&x-plex-playback-id=p_9b287a21-cb74-4905-9920-cf78e8c152ce&x-plex-provider-streaming-start=1737857606&url=6883812ad10c39c69cb45a329fc009f5-7bd6f54c7d9982a1d715addcce6a30e2eb4ab46e05e3bde6374112dd6f24fe170b7432a2f76f373805d3c3fe658817e8ef7ac95894134989582236d7f344d2e1296f3ba13377bb38c88aeceaea2072d8846a61c0efc9a3068f77b1d67550ee00ff81bf74e5112be0790d7d6557a7afcf1a4aa8d5876739e0babcb3c56b90916f2d60860c043b5c0f4d5d9805471b3d46fbe7e2477164ad9fa9a77134fa532dd3cf5456e1099c7581008d555bb6e57e9d57707aac75a6c4e056145b99145d5627e44695ca1f66f5919c19edb53d7273a5',
    type: 'hls',
    
},
jungo: {
        name: 'JUNGO PINOY TV',
        url: 'https://jungotvstream-chanall.akamaized.net/jungotv/jungopinoytv/playlist_1080p.m3u8',
        type: 'hls'
         }, 
HALLYPOP: {
        name: 'HALLY POP',
        url: 'https://jungotvstream-chanall.akamaized.net/jungotv/hallypop/playlist_1080p.m3u8',
        type: 'hls'
         }, 
Gmapinoy: {
    name: 'GMA PINOY TV',
        url: 'https://cdn-uw2-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-abscbn-gma-x7-dash-abscbnono/7c693236-e0c1-40a3-8bd0-bb25e43f5bfc/index.mpd',
        keyId: 'c95ed4c44b0b4f7fa1c6ebbbbaab21a1',
        key: '47635b8e885e19f2ccbdff078c207058',
		type: 'mpd'
	 },   
magillan: {
        name: 'MAGELLAN TV NOW',
        url: 'https://d38zwu2qgo0ado.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-ud4yxs1nuiyc5/Magellan_TV_Now_CA.m3u8?ads.device_did=%7BPSID',
        type: 'hls'
         }, 
tfc: {
    name: 'TFC',
        url: 'https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-tfcasia-dash-abscbnono/index.mpd',
        keyId: '9568cc84e1d944f38eac304517eab6fd',
        key: 'f12142af8f39b3bab79d3679d3665ebe',
		type: 'mpd'
	 },   
ANIMEtv: {
        name: 'ANIME TV',
        url: 'https://stmv1.srvif.com/animetv/animetv/chunklist_w273688155.m3u8',
        type: 'hls'
         }, 
   nbatvph: {
    name: 'NBA TV PH',
        url: 'https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/pl_nba.mpd',
        keyId: 'f36eed9e95f140fabbc88a08abbeafff',
        key: '0125600d0eb13359c28bdab4a2ebe75a',
		type: 'mpd'
	 },   
   nbatv: {
        name: 'NBA TV INDIHOME',
        url: 'https://cdn09jtedge.indihometv.com/joss/133/nba/chunklist_w224616247_b444100_sleng.m3u8',
        type: 'hls'
         },
	mp_tv: {
    name: 'MPTV',
        url: 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_mptv.mpd',
        keyId: '6aab8f40536f4ea98e7c97b8f3aa7d4e',
        key: '139aa5a55ade471faaddacc4f4de8807',
		type: 'mpd'
	}, 
   a2z: {
    name: 'A2Z',
        url: 'https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_a2z.mpd',
        keyId: 'f703e4c8ec9041eeb5028ab4248fa094',
        key: 'c22f2162e176eee6273a5d0b68d19530',
		type: 'mpd'
    },

	depedchannel: {
    name: 'DEP ED CHANNEL',
        url: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/depedch_sd.mpd',
        keyId: '0f853706412b11edb8780242ac120002',
        key: '2157d6529d80a760f60a8b5350dbc4df',
		type: 'mpd'
    },
	sarisari: {
    name: 'SARISARI',
        url: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_sari_sari_sd.mpd',
        keyId: '0a7ab3612f434335aa6e895016d8cd2d',
        key: 'b21654621230ae21714a5cab52daeb9d',
		type: 'mpd'
    },
	buko: {
    name: 'BUKO',
        url: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_buko_sd.mpd',
        keyId: 'd273c085f2ab4a248e7bfc375229007d',
        key: '7932354c3a84f7fc1b80efa6bcea0615',
		type: 'mpd'
    },
	knowledge: {
    name: 'KNOWLEDGE CHANNEL',
        url: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_knowledgechannel.mpd',
        keyId: '0f856fa0412b11edb8780242ac120002',
        key: '783374273ef97ad3bc992c1d63e091e7',
		type: 'mpd'
    },
	ptv4: {
    name: 'PTV4',
        url: 'https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_ptv4_sd.mpd',
        keyId: '71a130a851b9484bb47141c8966fb4a3',
        key: 'ad1f003b4f0b31b75ea4593844435600',
		type: 'mpd'
    },
	ibc13: {
    name: 'IBC13',
        url: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/ibc13_sd.mpd',
        keyId: '04e292bc99bd4ccba89e778651914254',
        key: 'ff0a62bdf8920ce453fe680330b563a5',
		type: 'mpd'
    },
	channelnews_asia: {
    name: 'CHANNEL NEWS ASIA',
        url: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_channelnewsasia.mpd',
        keyId: 'b259df9987364dd3b778aa5d42cb9acd',
        key: '753e3dba96ab467e468269e7e33fb813',
		type: 'mpd'
    },
	cg_tagalogmovie: {
    name: 'TMC',
        url: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_tagalogmovie.mpd',
        keyId: '96701d297d1241e492d41c397631d857',
        key: 'ca2931211c1a261f082a3a2c4fd9f91b',
		type: 'mpd'
    }, 
	tv5: {
        name: 'TV5',
        url: 'https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/tv5_hd.mpd',
        keyId: '2615129ef2c846a9bbd43a641c7303ef',
        key: '07c7f996b1734ea288641a68e1cfdc4d',
		type: 'mpd'
	}, 
      RPTV: {
        name: 'RPTV',
        url: 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cnn_rptv_prod_hd.mpd',
        keyId: '1917f4caf2364e6d9b1507326a85ead6',
        key: 'a1340a251a5aa63a9b0ea5d9d7f67595',
		type: 'mpd'
    },
onenews_hd: {
        name: 'ONE NEWS HD',
        url: 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/onenews_hd1.mpd',
        keyId: 'd39eb201ae494a0b98583df4d110e8dd',
        key: '6797066880d344422abd3f5eda41f45f',
		type: 'mpd'
    },
    oneph: {
        name: 'ONE PH',
        url: 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/oneph_sd.mpd',
        keyId: '92834ab4a7e1499b90886c5d49220e46',
        key: 'a7108d9a6cfcc1b7939eb111daf09ab3',
		type: 'mpd'
    },
    onesports: {
        name: 'ONE SPORTS HD',
        url: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_onesports_hd.mpd',
        keyId: '53c3bf2eba574f639aa21f2d4409ff11',
        key: '3de28411cf08a64ea935b9578f6d0edd',
		type: 'mpd'
    },
    uaap_varsity: {
        name: 'UAAP VARSITY',
        url: 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/cg_uaap_cplay_sd.mpd',
        keyId: '95588338ee37423e99358a6d431324b9',
        key: '6e0f50a12f36599a55073868f814e81e',
		type: 'mpd'
    }, 
	teleradyo: {
    name: 'TELERADYO',
        url: 'https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-teleradyo-dash-abscbnono/index.mpd',
        keyId: '47c093e0c9fd4f80839a0337da3dd876',
        key: '50547394045b3d047dc7d92f57b5fb33',
		type: 'mpd'
    },
    anc: {
    name: 'ANC',
        url: 'https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-anc-global-dash-abscbnono/index.mpd',
        keyId: '4bbdc78024a54662854b412d01fafa16',
        key: '6039ec9b213aca913821677a28bd78ae',
		type: 'mpd'
    }, 
	cinemaone: {
        name: 'CINEMA ONE',
        url: 'https://cinemaone-abscbn-ono.amagi.tv/index.m3u8',
        type: 'hls'
         },	 
    cinemo: {
        name: 'CINE MO!',
        url: 'https://d1bail49udbz1k.cloudfront.net/out/v1/3a895f368f4a467c9bca0962559efc19/index.mpd',
       keyId: 'aa8aebe35ccc4541b7ce6292efcb1bfb',
        key: 'aab1df109d22fc5d7e3ec121ddf24e5f',
       type: 'mpd'
         },
	pbo: {
        name: 'PBO',
        url: 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/pbo_sd.mpd',
        keyId: 'dcbdaaa6662d4188bdf97f9f0ca5e830',
        key: '31e752b441bd2972f2b98a4b1bc1c7a1',
		type: 'mpd'
    },
    viva: {
        name: 'VIVA',
        url: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/viva_sd.mpd',
        keyId: '07aa813bf2c147748046edd930f7736e',
        key: '3bd6688b8b44e96201e753224adfc8fb',
     	type: 'mpd'
    },
	SMNI: {
        name: 'SMNI',
        url: 'https://1a-1791.com/live/za4hy30t/slot-139/uiik-j0b1_1080p/chunklist_DVR.m3u8',
        type: 'hls'
         },  
         WWE: {
        name: 'WWE',
        url: 'https://akam.stream.peacocktv.com/Content/CMAF_CTR-4s/Live/channel(vc106wh3yw)/master.mpd',
        keyId: '00208c93f4358213b52220898b962385',
        key: '8ae6063167228e350dd132d4a1573102',
		type: 'mpd'
    }, 
        fightsport: {
        name: 'FIGHT SPORTS',
        url: 'https://cdn09jtedge.indihometv.com/joss/133/fightsport/index.m3u8',
        type: 'hls'
         },   
	redbull: {
        name: 'REDBULL TV',
        url: 'https://db38umy8gexon.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-f561zwy85csh9/playlist.m3u8?ads.device_did=%7BPSID%7D&ads.device_dnt=%7BTAR',
        type: 'hls'
         },
	  BOXINGTV: {
        name: 'BOXING TV',
        url: 'https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/boxing-tv/BOXINGTV_SCTE.m3u8',
        type: 'hls'
         },
	
	  pba_rush_hd: {
        name: 'PBA RUSH',
        url: 'https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/cg_pbarush_hd1.mpd',
        keyId: '76dc29dd87a244aeab9e8b7c5da1e5f3',
        key: '95b2f2ffd4e14073620506213b62ac82',
		type: 'mpd'
    }, 
     wwe: {
        name: 'PBS KIDS',
        url: 'https://cdn.klowdtv.net/803B48A/n1.klowdtv.net/live2/gsn_720p/playlist.m3u8',
        type: 'hls'
         },
	
	AMC: {
        name: 'AMC+',
        url: 'https://bcovlive-a.akamaihd.net/ba853de442c140b7b3dc020001597c0a/us-east-1/6245817279001/profile_0/chunklist.m3u8',
        type: 'hls'
         },  
  
    Animax: {
        name: 'ANIMAX',
        url: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_animax_sd.mpd',
        keyId: '92032b0e41a543fb9830751273b8debd',
        key: '03f8b65e2af785b10d6634735dbe6c11',
		type: 'mpd'
    },
    nickelodeon: {
        name: 'NICKELODEON',
        url: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_nickelodeon.mpd',
        keyId: '9ce58f37576b416381b6514a809bfd8b',
        key: 'f0fbb758cdeeaddfa3eae538856b4d72',
		type: 'mpd'
    },
    hbohd: {
        name: 'HBO HD',
        url: 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_hbohd.mpd',
        keyId: 'd47ebabf7a21430b83a8c4b82d9ef6b1',
        key: '54c213b2b5f885f1e0290ee4131d425b',
		type: 'mpd'
    },
    bilyonaryoch: {
        name: 'BILYONARYO',
        url: 'https://qp-pldt-live-grp-05-prod.akamaized.net/out/u/bilyonaryoch.mpd',
        keyId: '227ffaf09bec4a889e0e0988704d52a2',
        key: 'b2d0dce5c486891997c1c92ddaca2cd2',
		type: 'mpd'
    },
    
    truefmtv: {
        name: 'TRUE FM TV',
        url: 'https://qp-pldt-live-grp-08-prod.akamaized.net/out/u/truefm_tv.mpd',
        keyId: '0559c95496d44fadb94105b9176c3579',
        key: '40d8bb2a46ffd03540e0c6210ece57ce',
		type: 'mpd'
    },
    arirang: {
        name: 'ARIRANG',
        url: 'https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/arirang_sd.mpd',
        keyId: '13815d0fa026441ea7662b0c9de00bcf',
        key: '2d99a55743677c3879a068dd9c92f824',
		type: 'mpd'
    },
    premiersports_hd: {
        name: 'PREMIER SPORTS',
        url: 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_premiersports_hd1.mpd',
        keyId: 'fc19c98cb9504a0fb78b22fea0a4b814',
        key: 'ea683112a96d4ae6c32d4ea13923e8c7',
		type: 'mpd'
    },
    premier_tennishd: {
        name: 'PREMIER TENNIS',
        url: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_premiertennishd.mpd',
        keyId: '59454adb530b4e0784eae62735f9d850',
        key: '61100d0b8c4dd13e4eb8b4851ba192cc',
		type: 'mpd'
    },
    tapactionflix_hd: {
        name: 'TAP ACTION FLIX',
        url: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_tapactionflix_hd1.mpd',
        keyId: 'bee1066160c0424696d9bf99ca0645e3',
        key: 'f5b72bf3b89b9848de5616f37de040b7',
	    type: 'mpd'
    },
    thrill: {
       name: 'THRILL',
        url: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_thrill_sd.mpd',
        keyId: '928114ffb2394d14b5585258f70ed183',
        key: 'a82edc340bc73447bac16cdfed0a4c62',
		type: 'mpd'
    },
	hits_now: {
        name: 'HITS NOW',
        url: 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_hitsnow.mpd',
        keyId: '14439a1b7afc4527bb0ebc51cf11cbc1',
        key: '92b0287c7042f271b266cc11ab7541f1',
		type: 'mpd'
    },
	hbo_family: {
        name: 'HBO FAMILY',
        url: 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_hbofam.mpd',
        keyId: '872910c843294319800d85f9a0940607',
        key: 'f79fd895b79c590708cf5e8b5c6263be',
		type: 'mpd'
    },
	cinemax: {
        name: 'CINEMAX',
        url: 'https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/cg_cinemax.mpd',
        keyId: 'b207c44332844523a3a3b0469e5652d7',
        key: 'fe71aea346db08f8c6fbf0592209f955',
		type: 'mpd'
    },
	hbo_signature: {
        name: 'HBO SIGNATURE',
        url: 'https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/cg_hbosign.mpd',
        keyId: 'a06ca6c275744151895762e0346380f5',
        key: '559da1b63eec77b5a942018f14d3f56f',
		type: 'mpd'
    },
	hbo_hits: {
    name: 'HBO HITS',
        url: 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_hbohits.mpd',
        keyId: 'b04ae8017b5b4601a5a0c9060f6d5b7d',
        key: 'a8795f3bdb8a4778b7e888ee484cc7a1',
		type: 'mpd'
    },
        kmovies: {
        name: 'K-MOVIES',
        url: 'https://7732c5436342497882363a8cd14ceff4.mediatailor.us-east-1.amazonaws.com/v1/master/04fd913bb278d8775298c26fdca9d9841f37601f/Plex_NewMovies/playlist.m3u8',
        type: 'hls'
    },
	tvn_movies: {
    name: 'TVN MOVIES',
        url: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_tvnmovie.mpd',
        keyId: '2e53f8d8a5e94bca8f9a1e16ce67df33',
        key: '3471b2464b5c7b033a03bb8307d9fa35',
		type: 'mpd'
    },
	dreamworks_tag: {
    name: 'DREAMWORKS TAGALOG',
        url: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_dreamworktag.mpd',
        keyId: '564b3b1c781043c19242c66e348699c5',
        key: 'd3ad27d7fe1f14fb1a2cd5688549fbab',
		type: 'mpd'
    },
	tvn_plus: {
    name: 'TVN',
        url: 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_tvnpre.mpd',
        keyId: 'e1bde543e8a140b38d3f84ace746553e',
        key: 'b712c4ec307300043333a6899a402c10',
		type: 'mpd'
    },
	popup_ppv_hd: {
    name: 'POPUP PPV HD',
        url: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_popupppvhd.mpd',
        keyId: '286e1c2d622c4c73b5c3d72e4a848abd',
        key: 'b7fad67599c1ce3c2fbc9d02b901be05',
		type: 'mpd'
    },
	dreamworks_hd: {
    name: 'DREAMWORKS HD',
        url: 'https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_dreamworks_hd1.mpd',
        keyId: '4ab9645a2a0a47edbd65e8479c2b9669',
        key: '8cb209f1828431ce9b50b593d1f44079',
		type: 'mpd'
    },
	tap_edge: {
    name: 'TAP EDGE',
        url: 'https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_tapedge.mpd',
        keyId: '0f854034412b11edb8780242ac120002',
        key: 'af8ad1c5e3f2e1b751a4f64608f24275',
		type: 'mpd'
    },
	tap_sports: {
    name: 'TAP SPORTS',
        url: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_tapsports.mpd',
        keyId: 'eabd2d95c89e42f2b0b0b40ce4179ea0',
        key: '0e7e35a07e2c12822316c0dc4873903f',
		type: 'mpd'
    },
	one_sports_plus_hd: {
    name: 'ONE SPORTS PLUS HD',
        url: 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_onesportsplus_hd1.mpd',
        keyId: '322d06e9326f4753a7ec0908030c13d8',
        key: '1e3e0ca32d421fbfec86feced0efefda',
		type: 'mpd'
    },
	cctv4: {
    name: 'CCTV4',
        url: 'https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_cctv4.mpd',
        keyId: '0f8541ec412b11edb8780242ac120002',
        key: '6cf16c272b7357c48cd47061799a4963',
		type: 'mpd'
    },
	lifetime: {
    name: 'LIFETIME',
        url: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_lifetime.mpd',
        keyId: 'cf861d26e7834166807c324d57df5119',
        key: '64a81e30f6e5b7547e3516bbf8c647d0',
		type: 'mpd'
    },
	hgtv_hd: {
    name: 'HGTV HD',
        url: 'https://qp-pldt-live-grp-08-prod.akamaized.net/out/u/hgtv_hd1.mpd',
        keyId: 'f0e3ab943318471abc8b47027f384f5a',
        key: '13802a79b19cc3485d2257165a7ef62a',
		type: 'mpd'
    },
	aljazeera: {
    name: 'Al JAZEERA ',
        url: 'https://live-hls-web-aje.getaj.net/AJE/index.m3u8',
        type: 'hls'
    },
	foodnetwork_hd: {
    name: 'FOOD NETWORK HD',
        url: 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_foodnetwork_hd1.mpd',
        keyId: 'b7299ea0af8945479cd2f287ee7d530e',
        key: 'b8ae7679cf18e7261303313b18ba7a14',
		type: 'mpd'
    },
	history_hd: {
    name: 'HISTORY HD',
        url: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_historyhd.mpd',
        keyId: 'a7724b7ca2604c33bb2e963a0319968a',
        key: '6f97e3e2eb2bade626e0281ec01d3675',
		type: 'mpd'
    },
	fashiontv_hd: {
    name: 'FASHION TV HD',
        url: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_fashiontvhd.mpd',
        keyId: '971ebbe2d887476398e97c37e0c5c591',
        key: '472aa631b1e671070a4bf198f43da0c7',
		type: 'mpd'
    },
	bloomberg: {
    name: 'BLOOMBERG',
        url: 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/bloomberg_sd.mpd',
        keyId: 'ef7d9dcfb99b406cb79fb9f675cba426',
        key: 'b24094f6ca136af25600e44df5987af4',
		type: 'mpd'
    },

	SPOTV_HD: {
    name: 'SPOTV',
        url: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_spotvhd.mpd',
        keyId: 'ec7ee27d83764e4b845c48cca31c8eef',
        key: '9c0e4191203fccb0fde34ee29999129e',
		type: 'mpd'
    },
	SPOTV_HD2: {
    name: 'SPOTV2',
        url: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_spotv2hd.mpd',
        keyId: '7eea72d6075245a99ee3255603d58853',
        key: '6848ef60575579bf4d415db1032153ed',
		type: 'mpd'
    },
	animal_planet: {
    name: 'ANIMAL PLANET',
        url: 'https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_animal_planet_sd.mpd',
        keyId: '436b69f987924fcbbc06d40a69c2799a',
        key: 'c63d5b0d7e52335b61aeba4f6537d54d',
		type: 'mpd'
    },
	abc_australia: {
    name: 'ABC AUSTRALIA',
        url: 'https://qp-pldt-live-grp-10-prod.akamaized.net/out/u/dr_abc_aus.mpd',
        keyId: '389497f9f8584a57b234e27e430e04b7',
        key: '3b85594c7f88604adf004e45c03511c0',
		type: 'mpd'
    },
	bbcearth_hd: {
    name: 'BBC EARTH',
        url: 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_bbcearth_hd1.mpd',
        keyId: '34ce95b60c424e169619816c5181aded',
        key: '0e2a2117d705613542618f58bf26fc8e',
		type: 'mpd'
    },
	bbcworld_news: {
    name: 'BBCWORLD NEWS',
        url: 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/bbcworld_news_sd.mpd',
        keyId: 'f59650be475e4c34a844d4e2062f71f3',
        key: '119639e849ddee96c4cec2f2b6b09b40',
		type: 'mpd'
    },
	travel_channel: {
    name: 'TRAVEL CHANNEL',
        url: 'https://qp-pldt-live-grp-08-prod.akamaized.net/out/u/travel_channel_sd.mpd',
        keyId: 'f3047fc13d454dacb6db4207ee79d3d3',
        key: 'bdbd38748f51fc26932e96c9a2020839',
		type: 'mpd'
    },
	asianfoodnetwork: {
    name: 'ASIAN FOOD NETWORK',
        url: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/asianfoodnetwork_sd.mpd',
        keyId: '1619db30b9ed42019abb760a0a3b5e7f',
        key: '5921e47fb290ae263291b851c0b4b6e4',
		type: 'mpd'
    },
	taptv: {
    name: 'TAP TV',
        url: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_taptv_sd.mpd',
        keyId: 'f6804251e90b4966889b7df94fdc621e',
        key: '55c3c014f2bd12d6bd62349658f24566',
		type: 'mpd'
    },
	crime_investigation: {
    name: 'CRIME INVESTIGATION',
        url: 'https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_crime_invest.mpd',
        keyId: '21e2843b561c4248b8ea487986a16d33',
        key: 'db6bb638ccdfc1ad1a3e98d728486801',
		type: 'mpd'
    },
	tech_storm: {
    name: 'TECH STORM',
        url: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_tech_storm.mpd',
        keyId: '5675d85ce6754ba6aa8f6acc4660f76f',
        key: '140bfb365cf143c349f68699238a610c',
		type: 'mpd'
    },
	kix_hd: {
    name: 'KIX HD',
        url: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/kix_hd1.mpd',
        keyId: 'a8d5712967cd495ca80fdc425bc61d6b',
        key: 'f248c29525ed4c40cc39baeee9634735',
		type: 'mpd'
    },
DISNEYXD: {
        name: 'DISNEY XD',
        url: 'https://fl5.moveonjoy.com/DISNEY_XD/tracks-v1a1/mono.m3u8',
        type: 'hls'
         },
cartoon_net_hd: {
    name: 'CARTOON NETWORK HD',
        url: 'https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_cartoonnetworkhd.mpd',
        keyId: 'a2d1f552ff9541558b3296b5a932136b',
        key: 'cdd48fa884dc0c3a3f85aeebca13d444',
		type: 'mpd'
    },
	nickjr: {
    name: 'NICKJR',
        url: 'https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_nickjr.mpd',
        keyId: 'bab5c11178b646749fbae87962bf5113',
        key: '0ac679aad3b9d619ac39ad634ec76bc8',
		type: 'mpd'
    },
	nickelodeon: {
    name: 'NICKELODEON',
        url: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_nickelodeon.mpd',
        keyId: '9ce58f37576b416381b6514a809bfd8b',
        key: 'f0fbb758cdeeaddfa3eae538856b4d72',
		type: 'mpd'
    },
	blueant_extreme: {
    name: 'ROCK ACTION',
        url: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_rockextreme.mpd',
        keyId: '0f852fb8412b11edb8780242ac120002',
        key: '4cbc004d8c444f9f996db42059ce8178',
		type: 'mpd'
    },
	rock_entertainment: {
    name: 'ROCK ENTERTAINMENT',
        url: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_rockentertainment.mpd',
        keyId: 'e4ee0cf8ca9746f99af402ca6eed8dc7',
        key: 'be2a096403346bc1d0bb0f812822bb62',
		type: 'mpd'
    },
	discovery: {
    name: 'DISCOVERY ',
        url: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_discovery.mpd',
        keyId: 'd9ac48f5131641a789328257e778ad3a',
        key: 'b6e67c37239901980c6e37e0607ceee6',
		type: 'mpd'
    },
	kix_hd: {
    name: 'KIX HD',
        url: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/kix_hd1.mpd',
        keyId: 'a8d5712967cd495ca80fdc425bc61d6b',
        key: 'f248c29525ed4c40cc39baeee9634735',
		type: 'mpd'
    },
	kbs_world: {
    name: 'KBS WORLD',
        url: 'https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_kbsworld.mpd',
        keyId: '22ff2347107e4871aa423bea9c2bd363',
        key: 'c6e7ba2f48b3a3b8269e8bc360e60404',
		type: 'mpd'
    },
    AXN: {
        name: 'AXN',
        url: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_axn_sd.mpd',
        keyId: 'fd5d928f5d974ca4983f6e9295dfe410',
        key: '3aaa001ddc142fedbb9d5557be43792f',
		type: 'mpd'
         },	
cathtv: {
        name: 'CATHOLIC TV',
        url: 'https://catholictvhd-lh.akamaized.net/hls/live/2043390/CTVLiveHD/master_5.m3u8',
        type: 'hls'
         },
fishtv: {
         name: 'FISH TV',
        url: 'https://d35j504z0x2vu2.cloudfront.net/v1/manifest/0bc8e8376bd8417a1b6761138aa41c26c7309312/wired2fish/683467f1-75cf-4283-bb17-a93551008871/0.m3u8',
        type: 'hls'
         },
LN: {
        name: 'LOVE NATURE',
        url: 'https://cdn09jtedge.indihometv.com/joss/194/lovenature/index.m3u8',
        type: 'hls'
         }, 
GALAXYtv: {
        name: 'GALAXY TV TV',
        url: 'https://cdn09jtedge.indihometv.com/joss/133/galaxy/index.m3u8',
        type: 'hls'
         },
GALXYtv: {
        name: 'GALAXY TV PREMIUM',
        url: 'https://cdn09jtedge.indihometv.com/joss/133/galaxypremium/index.m3u8',
        type: 'hls'
         }, 
ESPN: {
        name: 'ESPN NEWS',
        url: 'https://fl5.moveonjoy.com/ESPN_2/tracks-v1a1/mono.m3u8',
        type: 'hls'
         }, 
ESPNU: {
        name: 'ESPN U',
        url: 'https://fl5.moveonjoy.com/ESPN_U/tracks-v1a1/mono.m3u8',
        type: 'hls'
         }, 
NATGEO: {
        name: 'NAT GEO',
        url: 'https://fl5.moveonjoy.com/National_Geographic/tracks-v1a1/mono.m3u8',
        type: 'hls'

},
"5_StarMax": {"name": "5 StarMax", "type": "hls", "url": "http://cdn1host.online:2999/kratorius/opLcbhlXaT/1603"}, "AandE": {"name": "A&E", "type": "hls", "url": "http://cdn1host.online:2999/live/kratorius/opLcbhlXaT/212.m3u8"}, "ABC_(WABC)": {"name": "ABC (WABC)", "type": "hls", "url": "http://fl1.moveonjoy.com/ABC_EAST/index.m3u8"}, "ACC_NETWORK": {"name": "ACC NETWORK", "type": "hls", "url": "http://fl2.moveonjoy.com/ACC_NETWORK/index.m3u8"}, "AMC": {"name": "AMC", "type": "hls", "url": "http://fl5.moveonjoy.com/AMC_NETWORK/index.m3u8"}, "American_Heroes_Channel": {"name": "American Heroes Channel", "type": "hls", "url": "http://fl3.moveonjoy.com/American_Heroes_Channel/index.m3u8"}, "Animal_Planet": {"name": "Animal Planet", "type": "hls", "url": "http://fl2.moveonjoy.com/Animal_Planet/index.m3u8"}, "Antenna": {"name": "Antenna", "type": "hls", "url": "http://fl3.moveonjoy.com/Antenna/index.m3u8"}, "Aspire": {"name": "Aspire", "type": "hls", "url": "http://fl3.moveonjoy.com/Aspire/index.m3u8"}, "BBC_AMERICA": {"name": "BBC AMERICA", "type": "hls", "url": "http://fl2.moveonjoy.com/BBC_AMERICA/index.m3u8"}, "BBC_WORLD_NEWS": {"name": "BBC WORLD NEWS", "type": "hls", "url": "http://fl2.moveonjoy.com/BBC_WORLD_NEWS/index.m3u8"}, "BEIN_SPORTS": {"name": "BEIN SPORTS", "type": "hls", "url": "http://fl2.moveonjoy.com/BEIN_SPORTS/index.m3u8"}, "BET": {"name": "BET", "type": "hls", "url": "http://fl2.moveonjoy.com/BET_EAST/index.m3u8"}, "BET_GOSPEL": {"name": "BET GOSPEL", "type": "hls", "url": "http://fl2.moveonjoy.com/BET_GOSPEL/index.m3u8"}, "BET_HER": {"name": "BET HER", "type": "hls", "url": "http://fl2.moveonjoy.com/BET_HER/index.m3u8"}, "BET_Jams": {"name": "BET Jams", "type": "hls", "url": "http://fl3.moveonjoy.com/BET_Jams/index.m3u8"}, "BET_SOUL": {"name": "BET SOUL", "type": "hls", "url": "http://fl2.moveonjoy.com/BET_SOUL/index.m3u8"}, "Big_Ten_Network_HD": {"name": "Big Ten Network HD", "type": "hls", "url": "http://fl3.moveonjoy.com/BIG_TEN_NETWORK/index.m3u8"}, "BLOOMBERG": {"name": "BLOOMBERG", "type": "hls", "url": "http://fl2.moveonjoy.com/BLOOMBERG/index.m3u8"}, "Boomerang": {"name": "Boomerang", "type": "hls", "url": "http://fl3.moveonjoy.com/BOOMERANG/index.m3u8"}, "Bounce": {"name": "Bounce", "type": "hls", "url": "http://fl3.moveonjoy.com/BOUNCE_TV/index.m3u8"}, "BRAVO": {"name": "BRAVO", "type": "hls", "url": "http://fl2.moveonjoy.com/BRAVO/index.m3u8"}, "Buzzr": {"name": "Buzzr", "type": "hls", "url": "http://fl3.moveonjoy.com/Buzzr/index.m3u8"}, "C_SPAN": {"name": "C-SPAN", "type": "hls", "url": "http://fl2.moveonjoy.com/C-SPAN/index.m3u8"}, "CARTOON_NETWORK": {"name": "CARTOON NETWORK", "type": "hls", "url": "http://fl2.moveonjoy.com/CARTOON_NETWORK/index.m3u8"}, "CBS": {"name": "CBS", "type": "hls", "url": "http://fl2.moveonjoy.com/CBSEAST/index.m3u8"}, "CBS_SPORTS_NETWORK": {"name": "CBS SPORTS NETWORK", "type": "hls", "url": "http://fl2.moveonjoy.com/CBS_SPORTS_NETWORK/index.m3u8"}, "CINEMAX_EAST": {"name": "CINEMAX EAST", "type": "hls", "url": "http://fl2.moveonjoy.com/CINEMAX_EAST/index.m3u8"}, "CINEMAX_MOREMAX": {"name": "CINEMAX MOREMAX", "type": "hls", "url": "http://fl3.moveonjoy.com/CINEMAX_MOREMAX/index.m3u8"}, "CINEMAX_WEST": {"name": "CINEMAX WEST", "type": "hls", "url": "http://fl2.moveonjoy.com/CINEMAX_WEST/index.m3u8"}, "Cleo_TV": {"name": "Cleo TV", "type": "hls", "url": "http://fl3.moveonjoy.com/Cleo_TV/index.m3u8"}, "CMT": {"name": "CMT", "type": "hls", "url": "http://fl3.moveonjoy.com/CMT/index.m3u8"}, "CNBC_FHD": {"name": "CNBC FHD", "type": "hls", "url": "http://fl5.moveonjoy.com/CNBC/index.m3u8"}, "CNN": {"name": "CNN", "type": "hls", "url": "https://turnerlive.warnermediacdn.com/hls/live/586495/cnngo/cnn_slate/VIDEO_3_1464000.m3u8"}, "CNN_INTERNATIONAL": {"name": "CNN INTERNATIONAL", "type": "hls", "url": "http://fl2.moveonjoy.com/CNN_INTERNATIONAL/index.m3u8"}, "COMEDY_CENTRAL": {"name": "COMEDY CENTRAL", "type": "hls", "url": "http://fl3.moveonjoy.com/Comedy_Central/index.m3u8"}, "COMET": {"name": "COMET", "type": "hls", "url": "http://fl3.moveonjoy.com/COMET/index.m3u8"}, "COOKING": {"name": "COOKING", "type": "hls", "url": "http://fl3.moveonjoy.com/COOKING_CHANNEL/index.m3u8"}, "COURT_TV": {"name": "COURT TV", "type": "hls", "url": "http://fl3.moveonjoy.com/COURT_TV/index.m3u8"}, "COZI_TV": {"name": "COZI TV", "type": "hls", "url": "http://fl3.moveonjoy.com/COZI_TV/index.m3u8"}, "CRAVE_1": {"name": "CRAVE 1", "type": "hls", "url": "http://fl3.moveonjoy.com/CRAVE_1/index.m3u8"}, "CRAVE_2": {"name": "CRAVE 2", "type": "hls", "url": "http://fl2.moveonjoy.com/CRAVE_2/index.m3u8"}, "CRAVE_3": {"name": "CRAVE 3", "type": "hls", "url": "http://fl3.moveonjoy.com/CRAVE_3/index.m3u8"}, "CRAVE_4": {"name": "CRAVE 4", "type": "hls", "url": "http://fl2.moveonjoy.com/CRAVE_4/index.m3u8"}, "Crime_+_Investigation": {"name": "Crime + Investigation", "type": "hls", "url": "http://cdn1host.online:2999/kratorius/opLcbhlXaT/2022"}, "Curiosity_Stream": {"name": "Curiosity Stream", "type": "hls", "url": "http://fl3.moveonjoy.com/Curiosity_Stream/index.m3u8"}, "Destination_America": {"name": "Destination America", "type": "hls", "url": "http://fl3.moveonjoy.com/Destination_America/index.m3u8"}, "Discovery_Channel": {"name": "Discovery Channel", "type": "hls", "url": "http://fl3.moveonjoy.com/Discovery_Channel/index.m3u8"}, "DISCOVERY_FAMILY_CHANNEL": {"name": "DISCOVERY FAMILY CHANNEL", "type": "hls", "url": "http://fl2.moveonjoy.com/DISCOVERY_FAMILY_CHANNEL/index.m3u8"}, "DISCOVERY_LIFE": {"name": "DISCOVERY LIFE", "type": "hls", "url": "http://fl2.moveonjoy.com/DISCOVERY_LIFE/index.m3u8"}, "Discovery_Science": {"name": "Discovery Science", "type": "hls", "url": "http://fl3.moveonjoy.com/Discovery_Science/index.m3u8"}, "DISNEY_CHANNEL": {"name": "DISNEY CHANNEL", "type": "hls", "url": "http://fl2.moveonjoy.com/DISNEY_CHANNEL/index.m3u8"}, "DISNEY_JR": {"name": "DISNEY JR", "type": "hls", "url": "http://fl2.moveonjoy.com/DISNEY_JR/index.m3u8"}, "DISNEY_XD": {"name": "DISNEY XD", "type": "hls", "url": "http://fl2.moveonjoy.com/DISNEY_XD/index.m3u8"}, "DIY": {"name": "DIY", "type": "hls", "url": "http://fl2.moveonjoy.com/DIY/index.m3u8"}, "E_ENTERTAINMENT_TELEVISION": {"name": "E ENTERTAINMENT TELEVISION", "type": "hls", "url": "http://fl2.moveonjoy.com/E_ENTERTAINMENT_TELEVISION/index.m3u8"}, "ESPN": {"name": "ESPN", "type": "hls", "url": "http://cdn1host.online:2999/live/kratorius/opLcbhlXaT/133.m3u8"}, "ESPN_2": {"name": "ESPN 2", "type": "hls", "url": "http://fl2.moveonjoy.com/ESPN_2/index.m3u8"}, "ESPN_NEWS": {"name": "ESPN NEWS", "type": "hls", "url": "http://fl2.moveonjoy.com/ESPN_NEWS/index.m3u8"}, "ESPN_U": {"name": "ESPN U", "type": "hls", "url": "http://fl2.moveonjoy.com/ESPN_U/index.m3u8"}, "FOOD_NETWORK": {"name": "FOOD NETWORK", "type": "hls", "url": "http://fl2.moveonjoy.com/FOOD_NETWORK/index.m3u8"}, "FOX_(WNYW)": {"name": "FOX (WNYW)", "type": "hls", "url": "http://fl1.moveonjoy.com/FOX_EAST/index.m3u8"}, "FOX_Business_Network": {"name": "FOX Business Network", "type": "hls", "url": "http://fl2.moveonjoy.com/FOX_Business_Network/index.m3u8"}, "FOX_News_Channel": {"name": "FOX News Channel", "type": "hls", "url": "http://cdn1host.online:2999/live/kratorius/opLcbhlXaT/267.m3u8"}, "FOX_SOCCER_PLUS": {"name": "FOX SOCCER PLUS", "type": "hls", "url": "http://cdn1host.online:2999/live/kratorius/opLcbhlXaT/265.m3u8"}, "FOX_SOUL": {"name": "FOX SOUL", "type": "hls", "url": "http://fl1.moveonjoy.com/FOX_SOUL/index.m3u8"}, "Freeform": {"name": "Freeform", "type": "hls", "url": "http://fl2.moveonjoy.com/FREE_FORM/index.m3u8"}, "FS1": {"name": "FS1", "type": "hls", "url": "http://fl2.moveonjoy.com/FOX_Sports_1/index.m3u8"}, "FS2": {"name": "FS2", "type": "hls", "url": "http://cdn1host.online:2999/kratorius/opLcbhlXaT/264"}, "Fuse": {"name": "Fuse", "type": "hls", "url": "http://fl2.moveonjoy.com/FUSE/index.m3u8"}, "FX": {"name": "FX", "type": "hls", "url": "http://fl2.moveonjoy.com/FX/index.m3u8"}, "FXM": {"name": "FXM", "type": "hls", "url": "http://fl2.moveonjoy.com/FX_MOVIE/index.m3u8"}, "FXX": {"name": "FXX", "type": "hls", "url": "http://fl2.moveonjoy.com/FXX/index.m3u8"}, "FYI_FHD": {"name": "FYI FHD", "type": "hls", "url": "http://fl2.moveonjoy.com/FYI/index.m3u8"}, "GAME_SHOW_NETWORK": {"name": "GAME SHOW NETWORK", "type": "hls", "url": "http://fl5.moveonjoy.com/GAME_SHOW_NETWORK/index.m3u8"}, "getTV": {"name": "getTV", "type": "hls", "url": "http://fl2.moveonjoy.com/GET_TV/index.m3u8"}, "GRIT_TV": {"name": "GRIT TV", "type": "hls", "url": "http://fl2.moveonjoy.com/GRIT_TV/index.m3u8"}, "Hallmark_Channel": {"name": "Hallmark Channel", "type": "hls", "url": "http://fl2.moveonjoy.com/HALLMARK_CHANNEL/index.m3u8"}, "Hallmark_Family": {"name": "Hallmark Family", "type": "hls", "url": "http://fl2.moveonjoy.com/HALLMARK_DRAMA/index.m3u8"}, "Hallmark_Mystery": {"name": "Hallmark Mystery", "type": "hls", "url": "http://fl2.moveonjoy.com/HALLMARK_MOVIES_MYSTERIES/index.m3u8"}, "HBO": {"name": "HBO", "type": "hls", "url": "http://fl2.moveonjoy.com/HBO/index.m3u8"}, "HBO_Comedy": {"name": "HBO Comedy", "type": "hls", "url": "http://fl2.moveonjoy.com/HBO_COMEDY/index.m3u8"}, "HBO_Family": {"name": "HBO Family", "type": "hls", "url": "http://fl2.moveonjoy.com/HBO_FAMILY/index.m3u8"}, "HBO_Zone": {"name": "HBO Zone", "type": "hls", "url": "http://fl2.moveonjoy.com/HBO_ZONE/index.m3u8"}, "HBO2": {"name": "HBO2", "type": "hls", "url": "http://fl2.moveonjoy.com/HBO_2/index.m3u8"}, "HGTV": {"name": "HGTV", "type": "hls", "url": "http://fl2.moveonjoy.com/HGTV/index.m3u8"}, "History": {"name": "History", "type": "hls", "url": "http://cdn1host.online:2999/live/kratorius/opLcbhlXaT/153.m3u8"}, "HLN": {"name": "HLN", "type": "hls", "url": "http://fl2.moveonjoy.com/HLN/index.m3u8"}, "HSN": {"name": "HSN", "type": "hls", "url": "http://fl2.moveonjoy.com/HSN/index.m3u8"}, "ID_(Investigation_Discovery)": {"name": "ID (Investigation Discovery)", "type": "hls", "url": "http://fl2.moveonjoy.com/INVESTIGATION_DISCOVERY/index.m3u8"}, "INSP_TV": {"name": "INSP TV", "type": "hls", "url": "http://fl2.moveonjoy.com/INSP/index.m3u8"}, "ION": {"name": "ION", "type": "hls", "url": "http://fl2.moveonjoy.com/ION_TV/index.m3u8"}, "Laff_TV": {"name": "Laff TV", "type": "hls", "url": "http://72.46.118.193/Laff/index.m3u8"}, "Lifetime": {"name": "Lifetime", "type": "hls", "url": "http://fl2.moveonjoy.com/LIFETIME/index.m3u8"}, "Lifetime_Movies_Network": {"name": "Lifetime Movies Network", "type": "hls", "url": "http://fl2.moveonjoy.com/LIFETIME_MOVIE_NETWORK/index.m3u8"}, "Logo": {"name": "Logo", "type": "hls", "url": "http://cdn1host.online:2999/live/kratorius/opLcbhlXaT/952.m3u8"}, "LOVE_NATURE": {"name": "LOVE NATURE", "type": "hls", "url": "http://fl1.moveonjoy.com/LOVE_NATURE/index.m3u8"}, "MAVTV": {"name": "MAVTV", "type": "hls", "url": "http://fl2.moveonjoy.com/MAV_TV/index.m3u8"}, "MeTV": {"name": "MeTV", "type": "hls", "url": "http://fl2.moveonjoy.com/ME_TV/index.m3u8"}, "MGM+": {"name": "MGM+", "type": "hls", "url": "http://fl2.moveonjoy.com/EPIX/index.m3u8"}, "MGM+_Drive_In": {"name": "MGM+ Drive-In", "type": "hls", "url": "http://fl2.moveonjoy.com/EPIX_DRIVE_IN/index.m3u8"}, "MGM+_HITS": {"name": "MGM+ HITS", "type": "hls", "url": "http://cdn1host.online:2999/kratorius/opLcbhlXaT/388"}, "MGM+_MARQUEE": {"name": "MGM+ MARQUEE", "type": "hls", "url": "http://cdn1host.online:2999/kratorius/opLcbhlXaT/132"}, "MLB_1": {"name": "MLB 1", "type": "hls", "url": "http://fl2.moveonjoy.com/MLB_1/index.m3u8"}, "MLB_2": {"name": "MLB 2", "type": "hls", "url": "http://fl2.moveonjoy.com/MLB_2/index.m3u8"}, "MLB_3": {"name": "MLB 3", "type": "hls", "url": "http://fl2.moveonjoy.com/MLB_3/index.m3u8"}, "MLB_Network": {"name": "MLB Network", "type": "hls", "url": "http://fl2.moveonjoy.com/MLB_NETWORK/index.m3u8"}, "MotorTrend": {"name": "MotorTrend", "type": "hls", "url": "http://fl2.moveonjoy.com/MOTOR_TREND/index.m3u8"}, "MSG": {"name": "MSG", "type": "hls", "url": "http://fl3.moveonjoy.com/MSG/index.m3u8"}, "MSNBC": {"name": "MSNBC", "type": "hls", "url": "http://cdn1host.online:2999/live/kratorius/opLcbhlXaT/143.m3u8"}, "MTV": {"name": "MTV", "type": "hls", "url": "http://fl2.moveonjoy.com/MTV/index.m3u8"}, "MTV_Classic": {"name": "MTV Classic", "type": "hls", "url": "http://cdn1host.online:2999/live/kratorius/opLcbhlXaT/1194.m3u8"}, "MTV_Live": {"name": "MTV Live", "type": "hls", "url": "http://fl2.moveonjoy.com/MTV_LIVE/index.m3u8"}, "MTV2": {"name": "MTV2", "type": "hls", "url": "http://fl2.moveonjoy.com/MTV_2/index.m3u8"}, "mtvU": {"name": "mtvU", "type": "hls", "url": "http://fl2.moveonjoy.com/MTV_U/index.m3u8"}, "MUCH": {"name": "MUCH", "type": "hls", "url": "http://fl1.moveonjoy.com/MUCH/index.m3u8"}, "National_Geographic": {"name": "National Geographic", "type": "hls", "url": "http://fl2.moveonjoy.com/National_Geographic/index.m3u8"}, "National_Geographic_Wild": {"name": "National Geographic Wild", "type": "hls", "url": "http://fl2.moveonjoy.com/Nat_Geo_Wild/index.m3u8"}, "NBA_1": {"name": "NBA 1", "type": "hls", "url": "http://fl5.moveonjoy.com/NBA_1/index.m3u8"}, "NBA_10": {"name": "NBA 10", "type": "hls", "url": "http://fl5.moveonjoy.com/NBA_10/index.m3u8"}, "NBA_11": {"name": "NBA 11", "type": "hls", "url": "http://fl5.moveonjoy.com/NBA_11/index.m3u8"}, "NBA_12": {"name": "NBA 12", "type": "hls", "url": "http://fl5.moveonjoy.com/NBA_12/index.m3u8"}, "NBA_13": {"name": "NBA 13", "type": "hls", "url": "http://fl5.moveonjoy.com/NBA_13/index.m3u8"}, "NBA_2": {"name": "NBA 2", "type": "hls", "url": "http://fl5.moveonjoy.com/NBA_2/index.m3u8"}, "NBA_3": {"name": "NBA 3", "type": "hls", "url": "http://fl5.moveonjoy.com/NBA_3/index.m3u8"}, "NBA_4": {"name": "NBA 4", "type": "hls", "url": "http://fl5.moveonjoy.com/NBA_4/index.m3u8"}, "NBA_5": {"name": "NBA 5", "type": "hls", "url": "http://fl5.moveonjoy.com/NBA_5/index.m3u8"}, "NBA_6": {"name": "NBA 6", "type": "hls", "url": "http://fl5.moveonjoy.com/NBA_6/index.m3u8"}, "NBA_7": {"name": "NBA 7", "type": "hls", "url": "http://fl5.moveonjoy.com/NBA_7/index.m3u8"}, "NBA_8": {"name": "NBA 8", "type": "hls", "url": "http://fl5.moveonjoy.com/NBA_8/index.m3u8"}, "NBA_9": {"name": "NBA 9", "type": "hls", "url": "http://fl5.moveonjoy.com/NBA_9/index.m3u8"}, "NBA_TV": {"name": "NBA TV", "type": "hls", "url": "http://fl2.moveonjoy.com/NBA_TV/index.m3u8"}, "NBC": {"name": "NBC", "type": "hls", "url": "http://fl1.moveonjoy.com/NBC_EAST/index.m3u8"}, "NBC_Golf": {"name": "NBC Golf", "type": "hls", "url": "http://fl2.moveonjoy.com/GOLF_CHANNEL/index.m3u8"}, "NewsNation": {"name": "NewsNation", "type": "hls", "url": "http://fl2.moveonjoy.com/NEWS_NATION/index.m3u8"}, "NFL_1": {"name": "NFL 1", "type": "hls", "url": "http://fl2.moveonjoy.com/NFL_1/index.m3u8"}, "NFl_10": {"name": "NFl 10", "type": "hls", "url": "http://fl2.moveonjoy.com/NFL_10/index.m3u8"}, "NFL_11": {"name": "NFL 11", "type": "hls", "url": "http://fl2.moveonjoy.com/NFL_11/index.m3u8"}, "NFL_12": {"name": "NFL 12", "type": "hls", "url": "http://fl2.moveonjoy.com/NFL_12/index.m3u8"}, "NFL_13": {"name": "NFL 13", "type": "hls", "url": "http://fl2.moveonjoy.com/NFL_13/index.m3u8"}, "NFL_14": {"name": "NFL 14", "type": "hls", "url": "http://fl2.moveonjoy.com/NFL_14/index.m3u8"}, "NFL_15": {"name": "NFL 15", "type": "hls", "url": "http://fl2.moveonjoy.com/NFL_15/index.m3u8"}, "NFL_2": {"name": "NFL 2", "type": "hls", "url": "http://fl2.moveonjoy.com/NFL_2/index.m3u8"}, "NFL_3": {"name": "NFL 3", "type": "hls", "url": "http://fl2.moveonjoy.com/NFL_3/index.m3u8"}, "NFL_4": {"name": "NFL 4", "type": "hls", "url": "http://fl2.moveonjoy.com/NFL_4/index.m3u8"}, "NFL_5": {"name": "NFL 5", "type": "hls", "url": "http://fl2.moveonjoy.com/NFL_5/index.m3u8"}, "NFL_6": {"name": "NFL 6", "type": "hls", "url": "http://fl2.moveonjoy.com/NFL_6/index.m3u8"}, "NFL_7": {"name": "NFL 7", "type": "hls", "url": "http://fl2.moveonjoy.com/NFL_7/index.m3u8"}, "NFL_8": {"name": "NFL 8", "type": "hls", "url": "http://fl2.moveonjoy.com/NFL_8/index.m3u8"}, "NFL_9": {"name": "NFL 9", "type": "hls", "url": "http://fl2.moveonjoy.com/NFL_9/index.m3u8"}, "NFL_Network": {"name": "NFL Network", "type": "hls", "url": "http://fl2.moveonjoy.com/NFL_NETWORK/index.m3u8"}, "NFL_RedZone": {"name": "NFL RedZone", "type": "hls", "url": "http://fl1.moveonjoy.com/NFL_RedZone/index.m3u8"}, "NHL_1": {"name": "NHL 1", "type": "hls", "url": "http://fl2.moveonjoy.com/NHL_1/index.m3u8"}, "NHL_10": {"name": "NHL 10", "type": "hls", "url": "http://fl5.moveonjoy.com/NHL_10/index.m3u8"}, "NHL_11": {"name": "NHL 11", "type": "hls", "url": "http://fl5.moveonjoy.com/NHL_11/index.m3u8"}, "NHL_13": {"name": "NHL 13", "type": "hls", "url": "http://fl5.moveonjoy.com/NHL_13/index.m3u8"}, "NHL_2": {"name": "NHL 2", "type": "hls", "url": "http://fl5.moveonjoy.com/NHL_2/index.m3u8"}, "NHL_3": {"name": "NHL 3", "type": "hls", "url": "http://fl2.moveonjoy.com/NHL_3/index.m3u8"}, "NHL_4": {"name": "NHL 4", "type": "hls", "url": "http://fl2.moveonjoy.com/NHL_4/index.m3u8"}, "NHL_5": {"name": "NHL 5", "type": "hls", "url": "http://fl2.moveonjoy.com/NHL_5/index.m3u8"}, "NHL_6": {"name": "NHL 6", "type": "hls", "url": "http://fl2.moveonjoy.com/NHL_6/index.m3u8"}, "NHL_7": {"name": "NHL 7", "type": "hls", "url": "http://fl2.moveonjoy.com/NHL_7/index.m3u8"}, "NHL_8": {"name": "NHL 8", "type": "hls", "url": "http://fl5.moveonjoy.com/NHL_8/index.m3u8"}, "NHL_9": {"name": "NHL 9", "type": "hls", "url": "http://fl2.moveonjoy.com/NHL_9/index.m3u8"}, "NHL_Network": {"name": "NHL Network", "type": "hls", "url": "http://fl2.moveonjoy.com/NHL_NETWORK/index.m3u8"}, "Nickelodeon": {"name": "Nickelodeon", "type": "hls", "url": "http://fl1.moveonjoy.com/NICKELODEON/index.m3u8"}, "NickJr": {"name": "NickJr", "type": "hls", "url": "http://fl2.moveonjoy.com/NICK_JR/index.m3u8"}, "NickMusic_USA": {"name": "NickMusic USA", "type": "hls", "url": "http://fl2.moveonjoy.com/NICK_MUSIC/index.m3u8"}, "NickToons": {"name": "NickToons", "type": "hls", "url": "http://fl1.moveonjoy.com/NICKTOONS/index.m3u8"}, "Oprah_Winfrey_Network": {"name": "Oprah Winfrey Network", "type": "hls", "url": "http://fl2.moveonjoy.com/OWN/index.m3u8"}, "Outdoor_Channel": {"name": "Outdoor Channel", "type": "hls", "url": "http://fl2.moveonjoy.com/OUTDOOR_CHANNEL/index.m3u8"}, "OUTER_MAX": {"name": "OUTER MAX", "type": "hls", "url": "http://fl2.moveonjoy.com/OUTER_MAX/index.m3u8"}, "OUTSIDE_TV": {"name": "OUTSIDE TV", "type": "hls", "url": "http://fl2.moveonjoy.com/OUTSIDE_TV/index.m3u8"}, "Ovation": {"name": "Ovation", "type": "hls", "url": "http://fl3.moveonjoy.com/Ovation/index.m3u8"}, "Oxygen": {"name": "Oxygen", "type": "hls", "url": "http://fl2.moveonjoy.com/OXYGEN/index.m3u8"}, "Paramount_Network": {"name": "Paramount Network", "type": "hls", "url": "http://fl2.moveonjoy.com/PARAMOUNT_NETWORK/index.m3u8"}, "Pixl": {"name": "Pixl", "type": "hls", "url": "http://cdn1host.online:2999/kratorius/opLcbhlXaT/1665"}, "PopTV": {"name": "PopTV", "type": "hls", "url": "http://cdn1host.online:2999/kratorius/opLcbhlXaT/226"}, "PPV_1": {"name": "PPV 1", "type": "hls", "url": "http://fl2.moveonjoy.com/PPV_1/index.m3u8"}, "PPV_2": {"name": "PPV 2", "type": "hls", "url": "http://fl2.moveonjoy.com/PPV_2/index.m3u8"}, "PPV_3": {"name": "PPV 3", "type": "hls", "url": "http://fl2.moveonjoy.com/PPV_3/index.m3u8"}, "PPV_5": {"name": "PPV 5", "type": "hls", "url": "http://fl2.moveonjoy.com/PPV_5/index.m3u8"}, "PPV_6": {"name": "PPV 6", "type": "hls", "url": "http://fl2.moveonjoy.com/PPV_6/index.m3u8"}, "Pursuit_Channel": {"name": "Pursuit Channel", "type": "hls", "url": "http://fl3.moveonjoy.com/Pursuit_Channel/index.m3u8"}, "QVC": {"name": "QVC", "type": "hls", "url": "http://fl2.moveonjoy.com/QVC/index.m3u8"}, "ReelzChannel": {"name": "ReelzChannel", "type": "hls", "url": "http://fl2.moveonjoy.com/REELZ/index.m3u8"}, "Revolt": {"name": "Revolt", "type": "hls", "url": "http://fl2.moveonjoy.com/REVOLT/index.m3u8"}, "Scripps_News": {"name": "Scripps News", "type": "hls", "url": "https://linear-460.frequency.stream/dist/vix/460/hls/master/playlist.m3u8"}, "SEC_Network": {"name": "SEC Network", "type": "hls", "url": "http://cdn1host.online:2999/kratorius/opLcbhlXaT/295"}, "Showtime": {"name": "Showtime", "type": "hls", "url": "http://fl2.moveonjoy.com/SHOWTIME/index.m3u8"}, "Showtime_2": {"name": "Showtime 2", "type": "hls", "url": "http://fl2.moveonjoy.com/SHOWTIME_2/index.m3u8"}, "Showtime_Extreme": {"name": "Showtime Extreme", "type": "hls", "url": "http://fl2.moveonjoy.com/SHOWTIME_EXTREME/index.m3u8"}, "Showtime_Next": {"name": "Showtime Next", "type": "hls", "url": "http://fl2.moveonjoy.com/SHOWTIME_NEXT/index.m3u8"}, "Showtime_Women": {"name": "Showtime Women", "type": "hls", "url": "http://fl2.moveonjoy.com/SHOWTIME_WOMEN/index.m3u8"}, "SMITHSONIAN_CHANNEL": {"name": "SMITHSONIAN CHANNEL", "type": "hls", "url": "http://fl2.moveonjoy.com/SMITHSONIAN_CHANNEL/index.m3u8"}, "Sony_Movie_Channel": {"name": "Sony Movie Channel", "type": "hls", "url": "http://cdn1host.online:2999/kratorius/opLcbhlXaT/1217"}, "Sportsman_Channel": {"name": "Sportsman Channel", "type": "hls", "url": "http://fl2.moveonjoy.com/SPORTSMAN_CHANNEL/index.m3u8"}, "Stadium": {"name": "Stadium", "type": "hls", "url": "http://cdn1host.online:2999/kratorius/opLcbhlXaT/1466"}, "Start_TV": {"name": "Start TV", "type": "hls", "url": "http://fl3.moveonjoy.com/Start_Tv/index.m3u8"}, "Starz": {"name": "Starz", "type": "hls", "url": "http://fl2.moveonjoy.com/STARZ/index.m3u8"}, "Starz_Comedy": {"name": "Starz Comedy", "type": "hls", "url": "http://fl2.moveonjoy.com/STARZ_COMEDY/index.m3u8"}, "Starz_Edge": {"name": "Starz Edge", "type": "hls", "url": "http://fl2.moveonjoy.com/STARZ_EDGE/index.m3u8"}, "Starz_Encore": {"name": "Starz Encore", "type": "hls", "url": "http://fl2.moveonjoy.com/STARZ_ENCORE/index.m3u8"}, "Starz_Encore_Action": {"name": "Starz Encore Action", "type": "hls", "url": "http://fl2.moveonjoy.com/STARZ_ENCORE_ACTION/index.m3u8"}, "STARZ_ENCORE_CLASSIC": {"name": "STARZ ENCORE CLASSIC", "type": "hls", "url": "http://fl5.moveonjoy.com/STARZ_ENCORE_CLASSIC/index.m3u8"}, "Starz_Encore_Westerns": {"name": "Starz Encore Westerns", "type": "hls", "url": "http://fl2.moveonjoy.com/STARZ_ENCORE_WESTERNS/index.m3u8"}, "STARZ_WEST": {"name": "STARZ WEST", "type": "hls", "url": "http://fl2.moveonjoy.com/STARZ_WEST/index.m3u8"}, "SundanceTV": {"name": "SundanceTV", "type": "hls", "url": "http://fl2.moveonjoy.com/SUNDANCE/index.m3u8"}, "SYFY": {"name": "SYFY", "type": "hls", "url": "http://fl2.moveonjoy.com/SYFY/index.m3u8"}, "TBS": {"name": "TBS", "type": "hls", "url": "http://fl1.moveonjoy.com/TBS/index.m3u8"}, "TCM": {"name": "TCM", "type": "hls", "url": "http://fl1.moveonjoy.com/TCM/index.m3u8"}, "Tennis_Channel": {"name": "Tennis Channel", "type": "hls", "url": "http://fl2.moveonjoy.com/TENNIS_CHANNEL/index.m3u8"}, "TLC": {"name": "TLC", "type": "hls", "url": "http://fl2.moveonjoy.com/TLC/index.m3u8"}, "TNT": {"name": "TNT", "type": "hls", "url": "http://fl2.moveonjoy.com/TNT/index.m3u8"}, "Travel_Channel": {"name": "Travel Channel", "type": "hls", "url": "http://fl2.moveonjoy.com/Travel_Channel/index.m3u8"}, "truTV": {"name": "truTV", "type": "hls", "url": "http://fl2.moveonjoy.com/TRU_TV/index.m3u8"}, "TSN_1": {"name": "TSN 1", "type": "hls", "url": "http://fl5.moveonjoy.com/TSN_1/index.m3u8"}, "TSN_2": {"name": "TSN 2", "type": "hls", "url": "http://fl5.moveonjoy.com/TSN_2/index.m3u8"}, "TSN_3": {"name": "TSN 3", "type": "hls", "url": "http://fl5.moveonjoy.com/TSN_3/index.m3u8"}, "TSN_4": {"name": "TSN 4", "type": "hls", "url": "http://fl5.moveonjoy.com/TSN_4/index.m3u8"}, "TSN_5": {"name": "TSN 5", "type": "hls", "url": "http://fl5.moveonjoy.com/TSN_5/index.m3u8"}, "TVLand": {"name": "TVLand", "type": "hls", "url": "http://fl2.moveonjoy.com/TV_Land/index.m3u8"}, "TVOne": {"name": "TVOne", "type": "hls", "url": "http://fl2.moveonjoy.com/TV_ONE/index.m3u8"}, "USA_Network": {"name": "USA Network", "type": "hls", "url": "http://fl2.moveonjoy.com/USA_Network/index.m3u8"}, "VH1": {"name": "VH1", "type": "hls", "url": "http://fl2.moveonjoy.com/VH1/index.m3u8"}, "Vice": {"name": "Vice", "type": "hls", "url": "http://fl2.moveonjoy.com/VICELAND/index.m3u8"}, "W_NETWORK": {"name": "W NETWORK", "type": "hls", "url": "http://fl2.moveonjoy.com/W_NETWORK/index.m3u8"}, "Weather_Channel": {"name": "Weather Channel", "type": "hls", "url": "http://fl2.moveonjoy.com/THE_WEATHER_CHANNEL/index.m3u8"}, "WeTV": {"name": "WeTV", "type": "hls", "url": "http://fl1.moveonjoy.com/WE_TV/index.m3u8"}, "WGN": {"name": "WGN", "type": "hls", "url": "http://fl2.moveonjoy.com/WGN/index.m3u8"}, "WORLD_FISHING_NETWORK": {"name": "WORLD FISHING NETWORK", "type": "hls", "url": "http://fl2.moveonjoy.com/WORLD_FISHING_NETWORK/index.m3u8"}, "YES_Network": {"name": "YES Network", "type": "hls", "url": "http://fl2.moveonjoy.com/YES_NETWORK/index.m3u8"}};
