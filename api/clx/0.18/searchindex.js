Search.setIndex({docnames:["10min-clx","api","index","intro-clx-dga","intro-clx-streamz","intro-clx-workflow"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,nbsphinx:3,sphinx:56},filenames:["10min-clx.ipynb","api.rst","index.rst","intro-clx-dga.ipynb","intro-clx-streamz.ipynb","intro-clx-workflow.ipynb"],objects:{"clx.analytics":{periodicity_detection:[1,2,0,"-"],stats:[1,2,0,"-"]},"clx.analytics.cybert":{Cybert:[1,0,1,""]},"clx.analytics.cybert.Cybert":{inference:[1,1,1,""],load_model:[1,1,1,""],preprocess:[1,1,1,""]},"clx.analytics.dga_detector":{DGADetector:[1,0,1,""]},"clx.analytics.dga_detector.DGADetector":{evaluate_model:[1,1,1,""],init_model:[1,1,1,""],load_model:[1,1,1,""],predict:[1,1,1,""],save_model:[1,1,1,""],train_model:[1,1,1,""]},"clx.analytics.model.rnn_classifier":{RNNClassifier:[1,0,1,""]},"clx.analytics.model.rnn_classifier.RNNClassifier":{forward:[1,1,1,""]},"clx.analytics.periodicity_detection":{filter_periodogram:[1,3,1,""],to_periodogram:[1,3,1,""],to_time_domain:[1,3,1,""]},"clx.analytics.phishing_detector":{PhishingDetector:[1,0,1,""]},"clx.analytics.phishing_detector.PhishingDetector":{evaluate_model:[1,1,1,""],init_model:[1,1,1,""],predict:[1,1,1,""],save_model:[1,1,1,""],train_model:[1,1,1,""]},"clx.analytics.sequence_classifier":{SequenceClassifier:[1,0,1,""]},"clx.analytics.sequence_classifier.SequenceClassifier":{evaluate_model:[1,1,1,""],init_model:[1,1,1,""],predict:[1,1,1,""],save_model:[1,1,1,""],train_model:[1,1,1,""]},"clx.analytics.stats":{rzscore:[1,3,1,""]},"clx.dns":{dns_extractor:[1,2,0,"-"]},"clx.dns.dns_extractor":{extract_hostnames:[1,3,1,""],generate_tld_cols:[1,3,1,""],parse_url:[1,3,1,""]},"clx.heuristics":{ports:[1,2,0,"-"]},"clx.heuristics.ports":{major_ports:[1,3,1,""]},"clx.io.reader.dask_fs_reader":{DaskFileSystemReader:[1,0,1,""]},"clx.io.reader.dask_fs_reader.DaskFileSystemReader":{close:[1,1,1,""],fetch_data:[1,1,1,""]},"clx.io.reader.fs_reader":{FileSystemReader:[1,0,1,""]},"clx.io.reader.fs_reader.FileSystemReader":{close:[1,1,1,""],fetch_data:[1,1,1,""]},"clx.io.reader.kafka_reader":{KafkaReader:[1,0,1,""]},"clx.io.reader.kafka_reader.KafkaReader":{close:[1,1,1,""],fetch_data:[1,1,1,""]},"clx.io.writer.fs_writer":{FileSystemWriter:[1,0,1,""]},"clx.io.writer.fs_writer.FileSystemWriter":{close:[1,1,1,""],write_data:[1,1,1,""]},"clx.io.writer.kafka_writer":{KafkaWriter:[1,0,1,""]},"clx.io.writer.kafka_writer.KafkaWriter":{close:[1,1,1,""],write_data:[1,1,1,""]},"clx.ip":{hostmask:[1,3,1,""],int_to_ip:[1,3,1,""],ip_to_int:[1,3,1,""],is_global:[1,3,1,""],is_ip:[1,3,1,""],is_link_local:[1,3,1,""],is_loopback:[1,3,1,""],is_multicast:[1,3,1,""],is_private:[1,3,1,""],is_reserved:[1,3,1,""],is_unspecified:[1,3,1,""],mask:[1,3,1,""],netmask:[1,3,1,""]},"clx.osi.farsight":{FarsightLookupClient:[1,0,1,""]},"clx.osi.farsight.FarsightLookupClient":{query_rdata_ip:[1,1,1,""],query_rdata_name:[1,1,1,""],query_rrset:[1,1,1,""]},"clx.osi.virus_total":{VirusTotalClient:[1,0,1,""]},"clx.osi.virus_total.VirusTotalClient":{domain_report:[1,1,1,""],file_report:[1,1,1,""],file_rescan:[1,1,1,""],file_scan:[1,1,1,""],ipaddress_report:[1,1,1,""],put_comment:[1,1,1,""],scan_big_file:[1,1,1,""],url_report:[1,1,1,""],url_scan:[1,1,1,""]},"clx.osi.whois":{WhoIsLookupClient:[1,0,1,""]},"clx.osi.whois.WhoIsLookupClient":{whois:[1,1,1,""]},"clx.parsers":{zeek:[1,2,0,"-"]},"clx.parsers.event_parser":{EventParser:[1,0,1,""]},"clx.parsers.event_parser.EventParser":{columns:[1,1,1,""],event_name:[1,1,1,""],filter_by_pattern:[1,1,1,""],parse:[1,1,1,""],parse_raw_event:[1,1,1,""]},"clx.parsers.splunk_notable_parser":{SplunkNotableParser:[1,0,1,""]},"clx.parsers.splunk_notable_parser.SplunkNotableParser":{parse:[1,1,1,""]},"clx.parsers.windows_event_parser":{WindowsEventParser:[1,0,1,""]},"clx.parsers.windows_event_parser.WindowsEventParser":{clean_raw_data:[1,1,1,""],get_columns:[1,1,1,""],parse:[1,1,1,""]},"clx.parsers.zeek":{parse_log_file:[1,3,1,""]},"clx.workflow.splunk_alert_workflow":{SplunkAlertWorkflow:[1,0,1,""]},"clx.workflow.splunk_alert_workflow.SplunkAlertWorkflow":{interval:[1,1,1,""],raw_data_col_name:[1,1,1,""],threshold:[1,1,1,""],window:[1,1,1,""],workflow:[1,1,1,""]},"clx.workflow.workflow":{Workflow:[1,0,1,""]},"clx.workflow.workflow.Workflow":{benchmark:[1,1,1,""],destination:[1,1,1,""],name:[1,1,1,""],run_workflow:[1,1,1,""],set_destination:[1,1,1,""],set_source:[1,1,1,""],source:[1,1,1,""],stop_workflow:[1,1,1,""],workflow:[1,1,1,""]},clx:{ip:[1,2,0,"-"]}},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"],"2":["py","module","Python module"],"3":["py","function","Python function"]},objtypes:{"0":"py:class","1":"py:method","2":"py:module","3":"py:function"},terms:{"001":[1,3],"010":1,"074966331":[0,1],"100":[0,1,3],"1000":1,"10000":1,"104":1,"107":[0,1],"110":1,"111407599":[0,1],"116":1,"123":1,"127":1,"128":[1,3],"130":[0,1],"131":0,"137":1,"138":0,"151":1,"1585596973":[0,1],"158832461":[0,1],"160":1,"167772161":1,"168":1,"169":1,"178":[0,1],"192":1,"193":0,"1993":0,"200mb":1,"2013":0,"2019":0,"2020":0,"207":1,"2181":4,"224":[0,1],"228914145":[0,1],"239":0,"241754521":0,"254":1,"255":[0,1],"256":1,"2701":0,"282966989":[0,1],"296828498":[0,1],"3232235521":1,"327849973":[0,1],"32mb":1,"360593742":[0,1],"374423424":[0,1],"4770":0,"500":4,"5156":0,"570321249":[0,1],"5728906989097595":1,"60s":4,"645941275":[0,1],"683973734":[0,1],"7000":1,"7680":1,"795223674":[0,1],"847751909":[0,1],"8787":4,"880026019":[0,1],"8888":4,"89088434":[0,1],"9092":[4,5],"924":1,"934372308":[0,1],"95050":0,"950835449":[0,1],"973564386367798":3,"9787":4,"9888":4,"abstract":1,"boolean":1,"case":[0,1,4],"class":[0,1,5],"default":1,"float":1,"function":[0,1,3,5],"import":[0,1,3,5],"int":1,"new":[0,3,5],"null":[0,1],"public":0,"return":[0,1,3,5],"short":0,"static":[0,3],"true":[0,1,3],"try":0,"while":[1,4],And:1,DNS:[0,2],For:[3,4,5],The:[0,1,3,4,5],Then:5,Tying:2,Use:[0,3,5],Uses:1,Using:3,Will:3,_raw:1,a23:0,abil:[0,4],about:0,abov:[3,4,5],abus:0,acceler:0,accept:[0,1],access:1,account:0,account_for_which_logon_failed_account_domain:0,account_for_which_logon_failed_account_nam:0,account_for_which_logon_failed_security_id:0,account_information_account_domain:0,account_information_account_nam:0,account_information_logon_guid:0,account_information_security_id:0,account_information_supplied_realm_nam:0,account_information_user_id:0,account_locked_out_account_nam:0,account_locked_out_security_id:0,account_whose_credentials_were_used_account_domain:0,account_whose_credentials_were_used_account_nam:0,account_whose_credentials_were_used_logon_guid:0,accuraci:1,across:1,activ:4,add:[1,4],addit:0,additional_information_caller_computer_nam:0,additional_information_expiration_tim:0,additional_information_failure_cod:0,additional_information_pre_authentication_typ:0,additional_information_privileg:0,additional_information_result_cod:0,additional_information_ticket_encryption_typ:0,additional_information_ticket_opt:0,additional_information_transited_servic:0,addr:1,addr_col:1,address:[0,1,3],advanc:[3,5],advantag:3,after:1,afterward:1,aggreg:5,akamaitechnolog:0,alert:[1,5],alert_data:0,alert_data_output:0,alexa:3,algorithm:3,all:[1,4],allow:[1,4],along:4,alreadi:1,also:[0,1,3,4,5],although:1,amazonaw:3,analyst:0,analyt:[0,2,3],anamoli:5,ani:[0,1,4],antiviru:1,apach:2,api:[0,2,4,5],api_kei:[0,1],apikei:[0,1],appli:[0,1],application_information_application_nam:0,application_information_process_id:0,approach:4,architectur:4,arg:1,argument:[1,2],around:5,arr2str:1,arrai:1,ascii:[1,3],associ:[3,5],attention_mask:1,attribut:[1,5],attributes_account_expir:0,attributes_allowed_to_delegate_to:0,attributes_display_nam:0,attributes_home_directori:0,attributes_home_dr:0,attributes_logon_hour:0,attributes_new_uac_valu:0,attributes_old_uac_valu:0,attributes_password_last_set:0,attributes_primary_group_id:0,attributes_profile_path:0,attributes_sam_account_nam:0,attributes_script_path:0,attributes_sid_histori:0,attributes_user_account_control:0,attributes_user_paramet:0,attributes_user_principal_nam:0,attributes_user_workst:0,audit:0,aux:4,avail:[0,3,5],averag:4,avg:4,avoid:5,awk:4,back:[1,4],bailiwick:1,bambenekconsult:3,base:[1,3],bash:4,basic:[0,5],batch:[1,3,4],batch_siz:[1,5],befor:[1,5],begin:[4,5],being:1,below:[0,3,4,5],benchmark:[1,2],benefici:0,benign:[1,3],bert:1,best:4,better:4,bidirect:1,bin:[1,4],bind:4,bit:1,biz:3,block:[3,4],blogspot:0,bool:[0,1],bootstrap:4,both:[0,3],broker:[4,5],buffer:4,build:[0,1,2,3],cafil:4,calcul:[0,1],call:[1,3,4],can:[0,1,3,4,5],capabl:3,captur:[1,2],care:1,cento:4,certificate_information_certificate_issuer_nam:0,certificate_information_certificate_serial_numb:0,certificate_information_certificate_thumbprint:0,chang:5,changed_attributes_account_expir:0,changed_attributes_allowedtodelegateto:0,changed_attributes_display_nam:0,changed_attributes_home_directori:0,changed_attributes_home_dr:0,changed_attributes_logon_hour:0,changed_attributes_new_uac_valu:0,changed_attributes_old_uac_valu:0,changed_attributes_password_last_set:0,changed_attributes_primary_group_id:0,changed_attributes_profile_path:0,changed_attributes_sam_account_nam:0,changed_attributes_script_path:0,changed_attributes_sid_histori:0,changed_attributes_user_account_control:0,changed_attributes_user_paramet:0,changed_attributes_user_principal_nam:0,changed_attributes_user_workst:0,char_vocab:[1,3],charact:1,cicril:0,circumv:3,citi:0,clara:0,classifi:1,clean:1,clean_raw_data:1,clientdeleteprohibit:0,clienttransferprohibit:0,close:1,cluster:4,clx:1,clx_dga_classifi:3,clx_streamz:4,clx_streamz_hom:4,cnn:0,code:[0,1],col_delimit:4,col_len:1,collect:0,column:[0,1,3,4,5],com:[0,1,3],combin:1,command:[3,4],comment:1,common:0,commonli:0,commun:3,compat:4,compon:[2,4],comput:[1,4],computernam:0,conclus:2,conda:3,conf:4,confidence_df:1,config:[0,1,4,5],config_filepath:1,configur:[0,1,2,4],conjunct:3,conn:1,connect:[0,1,5],consol:4,consum:[1,4,5],consumer_conf:4,consumer_kafka_top:5,contain:[0,1,2,3],content:2,control:3,conveni:4,convert:[1,3],copi:3,core:[1,4],correspond:1,correspondingto:1,could:3,countri:0,cpp_dlpack:3,cpu:3,creat:[0,2,3,5],creation_d:0,cross:1,csv:[0,3,4,5],cuda:[1,4],cudf:[0,1,3,4,5],cudf_engin:4,cuml:1,cupi:1,current:1,custom:2,customworkflow:5,cyber:[1,2,5],cybersecur:0,cybert:[1,2],cybert_workflow:4,cypars:1,dai:1,dashboard:4,dask:[1,4],dask_f:5,dask_fs_read:1,daskfilesystemread:1,data:[1,2,3,4,5],data_filepath:4,datafram:[0,1,3,5],dataload:1,dataset:[1,3],date:3,datetime_format:1,decid:0,decim:1,declar:5,decor:1,def:[0,5],defin:[0,1],delimit:[0,1,4,5],demonstr:[0,3,4],depend:5,deploi:[0,5],deprec:1,depth:3,dest:5,destin:[0,1,5],detail:3,detailed_authentication_information_authentication_packag:0,detailed_authentication_information_key_length:0,detailed_authentication_information_logon_process:0,detailed_authentication_information_package_name_ntlm_onli:0,detailed_authentication_information_transited_servic:0,detect:[0,1,2,4],detector:3,detector_dataset:3,detectordataset:3,determin:[1,4,5],develop:[3,5],devic:4,dga:[0,1,2],dga_detect:4,dga_detector:[1,3],dga_prob:1,dgadetector:[1,3],dgadomain:1,dict:1,dictionari:[0,1,5],differ:[0,3,5],directli:[0,4],directori:1,dirpath:0,disclos:0,distilbert:1,distinguish:[1,5],dlpack:3,dns1:0,dns2:0,dns:[0,1],dns_extractor:[0,1],dnsdb:[0,1],dnsmadeeasi:0,dnssec:0,docker2:4,docker:2,dockerfil:4,document:[4,5],domain:[0,1,2,3],domain_nam:0,domain_report:1,domainnam:1,don:1,done:[1,3],driver:4,dtype:[0,1,3,5],duiwlqeejymdb:3,each:[1,4,5],easi:3,easili:3,effort:3,either:3,elasticsearch:4,elasticsearch_conf:4,electra:1,element:1,email:[0,1],emails_test:1,emails_train:1,enabl:3,end:0,endpoint:1,energi:1,engin:[0,4],enrich:[1,5],entrypoint:4,env:3,environ:[3,4,5],environmetn:0,eph_min:1,ephemer:1,epoch:[1,3],epp:0,equal:1,equival:1,escap:1,esepci:3,establish:5,estim:4,etc:[0,5],evalu:1,evaluate_model:1,event:[0,1],event_nam:1,event_pars:1,event_regex:1,eventcod:[0,1],eventpars:1,everi:1,exampl:[0,1,2,3],exec:4,execut:[0,1],exist:3,expans:3,expiration_d:0,express:1,expresswai:0,extens:4,extern:2,extract:[1,2],extract_hostnam:1,extractor:2,facebook:3,failure_information_failure_reason:0,failure_information_statu:0,failure_information_sub_statu:0,fals:[0,1],farsight:[0,1],farsightdb:0,farsightlookupcli:[0,1],farsightsecur:0,featur:0,feed:[3,5],fetch:1,fetch_data:1,file:[0,1,2,4],file_extens:4,file_path:1,file_report:1,file_rescan:1,file_scan:1,filepath:[1,4],filesystem:4,filesystemread:1,filesystemwrit:1,filter:[0,1],filter_by_pattern:1,filter_information_filter_run_time_id:0,filter_information_layer_nam:0,filter_information_layer_run_time_id:0,filter_periodogram:1,find:[1,5],first:[0,3,5],firstli:5,flag:[1,4],flexibl:1,follow:[0,4,5],form:1,format:[4,5],former:1,fortran:3,forum:0,forward:1,found:[4,5],frequenc:1,from:[0,1,3,4,5],fs_api_kei:0,fs_client:0,fs_reader:1,fs_writer:1,ftp:0,full:5,gate:3,gdf_col:3,gear:0,gener:[1,3,5],generate_tld_col:1,get:[0,1,2],get_column:1,get_hostname_split_df:1,getcwd:0,github:[0,1],given:[0,1,3,4],global:1,gmail:[0,1],goe:0,googl:[0,1,3],gpu:[0,1,3,4,5],greater:1,grep:4,group:[4,5],group_group_domain:0,group_group_nam:0,group_id:5,group_security_id:0,gru:3,guid:[4,5],handl:[1,5],has:[0,4],has_data:1,have:[1,5],head:0,header:[0,1,5],here:[0,4,5],heurist:2,hidden:1,hidden_s:[1,3],high:1,higher:1,hold:[1,4],hook:1,hope:4,host:[1,4],hostmask:1,hostmast:0,hostnam:[0,1],hostname_split:1,hostname_split_df:1,hour:1,how:[0,2,4,5],http:[0,1,3,4],http_proxi:1,https_proxi:1,huggingfac:1,iana:1,icann:0,ideal:3,idp:0,ignor:1,imag:2,implement:[1,3,4,5],inbound:0,includ:[0,1,4],increas:[4,5],index:[2,4],indic:[0,1,5],infer:[1,4],inferenc:[2,4],info:[0,3],inform:[0,1,4,5],ingest:4,init_model:[1,3],initi:3,input:[0,1,4,5],input_addr_col:1,input_data:1,input_df:[0,1],input_format:[0,1,5],input_id:1,input_ip:1,input_mask:1,input_path:[0,1,5],input_port_col:1,input_s:1,input_top:4,instal:4,instanc:[1,4],instanti:[0,1,5],instead:1,int64:[0,1,3],int_to_ip:1,integ:1,integr:[2,5],intellig:2,interest:1,interested_eventcod:1,interv:[1,4],introduct:[0,3,5],ip_to_int:[0,1],ipaddress_report:1,ips:1,ipv4:1,ipv6:1,is_dga:3,is_glob:1,is_ip:1,is_link_loc:1,is_loopback:1,is_multicast:[0,1],is_priv:1,is_reserv:1,is_unspecifi:1,json:[1,4],jupyt:3,kafka:[0,1,4],kafka_brok:5,kafka_conf:4,kafka_hom:4,kafka_read:1,kafka_top:1,kafka_topic_setup:4,kafka_writ:1,kafkaread:1,kafkawrit:1,keep:[1,3],kei:[0,1],keyword:1,kill:4,know:5,kofsmyaiufarb:3,label:[1,4],label_fil:4,label_map:4,labels_test:1,labels_train:1,larg:3,larger:[1,3],latest:[1,4],latter:1,layer:1,learn:[1,2],learning_r:1,least:1,legaci:4,legitim:1,len:1,length:1,less:4,let:[0,3,5],lib:3,librari:[2,3],lightspe:0,like:5,limit:[0,1],line:5,link:1,linkedin:3,list:[0,1,3,5],load:[1,2],load_model:[1,3],local:[1,5],localhost2:4,localhost:4,locat:[0,1,5],log:[1,2,3],logon_typ:0,logparseworkflow:0,longer:1,look:[0,5],loopback:1,loss:[1,3],lower:1,lpw:0,ltd:0,machin:2,mai:[1,5],mainli:0,major:[1,3],major_port:1,malici:[1,3],malwar:3,mandatori:1,mask:1,match:1,max:[1,4],max_batch_s:4,max_seq_len:1,maximum:5,md5:1,mean:1,member_account_nam:0,member_security_id:0,memori:3,messag:[1,4,5],meta_data:1,method:[1,3],microsoft:0,might:5,min_conn:1,minimum:1,minut:2,model:[1,2,4],model_fil:4,model_filepath:1,model_or_path:1,model_path:1,model_select:1,modul:[0,1,2],modular:5,more:[0,3,4,5],most:1,multi:4,multicast:1,multipl:1,must:[1,5],my_new_workflow:5,n_domain_typ:[1,3],n_layer:[1,3],n_partit:4,name:[0,1,3,4,5],name_serv:0,napplic:0,ncomputernam:0,ndarrai:1,necessari:0,need:[0,1,3,4,5],net:[0,3],net_mask:1,netbio:1,netmask:1,network:[1,3],network_information_client_address:0,network_information_client_port:0,network_information_destination_address:0,network_information_destination_port:0,network_information_direct:0,network_information_network_address:0,network_information_port:0,network_information_protocol:0,network_information_source_address:0,network_information_source_network_address:0,network_information_source_port:0,network_information_workstation_nam:0,neural:3,neventcod:0,neventtyp:0,new_account_account_nam:0,new_account_domain_nam:0,new_account_security_id:0,new_email:1,new_logon_account_domain:0,new_logon_account_nam:0,new_logon_logon_guid:0,new_logon_logon_id:0,new_logon_security_id:0,next:[0,3],nfilter:0,nice:1,nkeyword:0,nlognam:0,nmessag:0,nnetwork:0,none:[0,1],nopcod:0,notabl:1,note:4,notebook:3,now:[0,5],nrecordnumb:0,ns5:0,ns6:0,ns7:0,nsone:0,nsourcenam:0,ntaskcategori:0,ntype:0,number:[1,3,4,5],nvidia:[0,1,4],object:1,offer:0,often:0,onam:1,onc:5,one:[1,5],onli:[1,3,4,5],open:2,oper:[0,5],opt:3,optim:1,option:[1,4,5],orc:5,order:[1,3,5],org:[0,1],osi:[0,2],osint:3,other:0,our:[0,3,5],out:1,output:[0,1,3,4,5],output_delimit:5,output_df:0,output_dir:4,output_format:[0,1,5],output_path:[0,1,5],output_s:1,output_top:4,over:3,overridden:1,own:3,p09:0,p_valu:1,packag:[0,3],pad:1,page:[0,2],panda:[0,1],parallel:1,param:1,paramet:[1,4,5],parquet:5,pars:[1,2,3,4],parse_log_fil:1,parse_raw_ev:1,parse_url:[0,1],parsed_df:1,parser:[0,2],part:5,particular:5,partit:[3,4],pascal:4,pass:1,password:4,path:[1,4,5],pattern:1,pem:4,perform:[0,1,4,5],periodicity_detect:1,periodogram:1,permit:0,phish:1,phish_detect:1,phishing_detector:1,phishingdetector:1,pid:4,pipelin:[1,4,5],platform:0,pleas:1,plug:5,poll:4,poll_interv:4,port:[0,1,4],port_col:1,posit:1,post:1,postprocess:1,prdg:1,pre:1,predict:[1,3],prefer:4,prefix:1,prefixlen:1,preprocess:1,prerequisit:4,present:0,pretrain:1,print:[0,1,4],privat:1,privileg:0,probabl:1,process:[1,4,5],process_information_caller_process_id:0,process_information_caller_process_nam:0,process_information_process_id:0,process_information_process_nam:0,process_process_id:0,process_process_nam:0,processed_df:1,produc:[0,1,3,4],producer_conf:4,product:3,properti:[1,4,5],protect:0,provid:[0,1,3,5],proxi:1,pth:[1,3],publish:[1,4],publisher_kafka_top:5,purpos:1,push:[1,4],put_com:1,pydata:[0,1],python3:3,python:[0,4,5],pytorch:1,pytorch_model:4,queri:[0,1],query_rdata_ip:1,query_rdata_nam:1,query_rrset:[0,1],queu:1,queue:4,quickli:[0,5],quickstart:2,rang:1,rapid:[0,3,4],rate:1,raw:[0,1,5],raw_column:1,raw_data_col:1,raw_data_col_nam:1,raw_df:1,rdata_ip:1,rdata_nam:1,reach:5,read:[0,1,4,5],read_csv:5,reader:1,readi:[0,4],readlin:0,real:0,receiv:[0,1,5],recent:1,recip:1,reconstruct:1,record:1,recurr:3,refer:[2,5],referral_url:0,regex:1,regist:[0,1],registrar:0,regular:1,reli:5,remov:[1,3],replac:1,report:1,repres:[1,3],represent:1,req_col:1,request:1,requir:[1,4,5],required_col:[0,5],rescan:1,reserv:1,resourc:[1,3,4],respect:1,result:[0,1,4],result_df:0,retriev:1,rnn_classifi:1,rnnclassifi:1,roll:[0,1],rotat:3,row:[0,1,3],rrtype:1,rtype:1,run:[0,1,2,5],run_workflow:[0,1,5],runtim:4,rzscore:[0,1],safenam:0,sampl:2,san:0,santa:0,satisfi:1,save:[1,2],save_model:[1,3],save_to_path:1,sbcglobal:0,scale:1,scan:1,scan_big_fil:1,scan_id:1,schema:[0,5],scientist:0,score:[0,1],script:4,search:[2,5],second:4,secur:0,see:5,seen:5,select:[1,4],self:[0,5],send:[1,4],sentenc:1,sep:1,seq_length:1,sequenc:[0,1],sequence_classifi:1,sequenceclassifi:1,seri:[0,1],server:[0,1,3,4],serverdeleteprohibit:0,servertransferprohibit:0,serverupdateprohibit:0,servic:[1,4],service_information_service_id:0,service_information_service_nam:0,service_serv:0,service_service_nam:0,session:4,set:[1,3,4,5],set_destin:1,set_sourc:1,sha:1,share:4,shorter:1,should:1,show:0,shown:[4,5],sigint:4,signal:[1,4],silent:1,similarli:4,simpl:0,simpli:[0,3],simplifi:0,sinc:[1,3],singl:1,sink:4,site:3,size:[1,3,4],small:[0,3],some:0,sometim:5,sourc:[2,4,5],sourcecod:5,special:1,specif:[0,1,4,5],specifi:[1,4],speed:[3,4,5],split:1,splunk:[1,5],splunk_alert_workflow:1,splunk_notable_pars:1,splunkalertworkflow:1,splunknotablepars:1,start:[0,2],stat:[0,1],state:0,statist:0,statistc:0,statu:0,step:[1,2,5],still:0,stop_workflow:1,str:[0,1,5],stream:4,streamz:2,stride:1,stride_len:1,string:[1,3],subclass:1,subdomain:[0,1],subject_account_domain:0,subject_account_nam:0,subject_logon_guid:0,subject_logon_id:0,subject_security_id:0,submiss:1,submit:1,subnet:1,success:0,suffix:[0,1],support:1,system:[0,1],t100:0,t138:0,t17:0,t44:0,take:1,tapplic:0,target_account_account_domain:0,target_account_account_nam:0,target_account_new_account_nam:0,target_account_old_account_nam:0,target_account_security_id:0,target_server_additional_inform:0,target_server_target_server_nam:0,tdestin:0,tdirect:0,teach:5,tensor:3,test:[0,1],test_data:1,test_df:3,text:1,tfilter:0,than:1,thei:5,them:[1,3,5],thi:[0,1,3,4,5],threat:2,threshold:1,through:[3,5],throughput:4,tie:0,time:[0,1,5],time_window:[1,5],timeout:4,timout:4,tinbound:0,tlayer:0,tld0:1,tld1:1,tld2:1,tld:[1,2],tmall:3,to_csv:0,to_dlpack:3,to_periodogram:1,to_time_domain:1,togeth:2,token:1,toma:0,toolkit:4,top:3,topic1:5,topic2:5,topic3:5,topic:[1,4,5],torch:1,total:[0,1,3],toward:0,tprocess:0,tprotocol:0,tradit:[0,3],train:[1,2],train_data:1,train_df:3,train_emails_df:1,train_model:[1,3],train_siz:1,train_test_split:1,translat:0,transpos:3,treceiv:0,trigger:1,truncat:1,tsourc:0,tsystem:0,twitter:3,txt:3,type:[1,2,3,5],ubuntu:4,uncas:1,unit:3,unnecessari:3,unsign:0,unspecifi:1,updated_d:0,upload:1,upload_url:1,upon:5,url:[0,1,4],url_df_col:1,url_report:1,url_scan:[0,1],url_seri:1,use:[1,2,4],used:[0,1,3,4,5],user234:0,user:[0,3,4],user_account_domain:0,user_account_nam:0,user_security_id:0,usernam:4,userwarn:3,uses:[0,3],using:[0,1,4,5],util:1,v18:4,v19:4,valid:4,valu:[1,4],variou:1,verifi:1,version:1,view:[3,4],viru:0,virus_tot:[0,1],virustot:[0,1],virustotalcli:[0,1],visit:[0,4],vocabulari:1,volum:4,vt_api_kei:0,vt_client:0,vt_endpoint_dict:1,wadmpfvzi5ei:0,wai:[1,5],wait:[1,5],waiterr:0,want:[1,3,4],warn:3,wejaecjhycwss:3,wep:0,what:2,when:[2,4],where:1,whether:[1,3,4],which:[0,1,3,4,5],whoi:[0,1],whois_client:0,whois_result:0,whois_serv:0,whoislookupcli:[0,1],window:[0,1,5],windows_event_pars:[0,1],windowseventpars:[0,1],winevt:0,within:[0,1,4,5],work:[0,4],workflow:[2,3],workflow_script:4,world:0,worldbank:0,worlflow:5,would:[1,5],write:[1,4,5],write_data:1,writer:1,written:[1,5],www:[0,1],xskphhmrlcihr:3,xtorhktvpblmr:3,xvljisbfalkt:3,yahoo:3,yaml:[0,4,5],yet:1,ylqblbltqkynb:3,you:[1,3,4,5],your:[0,3,4,5],your_volume_binding_container_directory_path:4,your_volume_binding_host_directory_path:4,youtub:3,zeek:1,zero:1,zip:3,zipcod:0,zookeep:4,zscore:[0,1],zscores_df:[0,1]},titles:["10 minutes to CLX","API Reference","Welcome to clx\u2019s documentation!","CLX DGA Detection","Getting Started with CLX and Streamz","CLX Workflow"],titleterms:{DNS:1,Tying:5,analyt:1,apach:4,api:1,argument:4,benchmark:4,build:4,captur:4,check:0,clx:[0,2,3,4,5],compon:5,conclus:3,configur:5,contain:4,convert:0,creat:4,custom:[4,5],cyber:0,cybert:4,dask:5,data:0,detect:3,dga:[3,4],docker:4,document:2,domain:4,exampl:[4,5],extern:5,extract:0,extractor:1,file:5,filesystem:5,get:4,heurist:1,how:3,imag:4,indic:2,inferenc:3,integ:0,integr:[0,1],intellig:0,ipv4:0,kafka:5,learn:0,librari:0,load:3,log:[0,4],machin:0,minut:0,model:3,multicast:0,open:[0,1],osi:1,pars:0,parser:1,quickstart:4,refer:1,run:4,sampl:4,save:3,simpl:5,sourc:[0,1],start:4,step:4,streamz:4,tabl:2,threat:0,tld:0,togeth:5,train:3,type:0,use:[0,3,5],valu:0,welcom:2,what:[0,3,5],when:[0,3,5],workflow:[0,1,4,5]}})