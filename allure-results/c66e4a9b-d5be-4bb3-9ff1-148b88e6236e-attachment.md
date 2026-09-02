# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: datentry.spec.js >> data entry
- Location: tests/datentry.spec.js:8:1

# Error details

```
Error: locator.fill: Error: Malformed value
Call log:
  - waiting for locator('#start-date')
    - locator resolved to <input type="date" id="start-date" placeholder="Start Date"/>
    - fill("01/01/2026")
  - attempting fill action
    - waiting for element to be visible, enabled and editable

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e16]:
    - banner [ref=e17]:
      - generic [ref=e23]:
        - heading "Automation Testing Practice" [level=1] [ref=e25]
        - paragraph [ref=e27]: For Selenium, Cypress & Playwright
    - list [ref=e34]:
      - listitem [ref=e35]:
        - link "Home" [ref=e36] [cursor=pointer]:
          - /url: http://testautomationpractice.blogspot.com/
      - listitem [ref=e37]:
        - link "Udemy Courses" [ref=e38] [cursor=pointer]:
          - /url: https://www.pavanonlinetrainings.com/#udemy
      - listitem [ref=e39]:
        - link "Online Trainings" [ref=e40] [cursor=pointer]:
          - /url: https://www.pavanonlinetrainings.com/
      - listitem [ref=e41]:
        - link "Blog" [ref=e42] [cursor=pointer]:
          - /url: https://www.pavantestingtools.com/
      - listitem [ref=e43]:
        - link "PlaywrightPractice" [ref=e44] [cursor=pointer]:
          - /url: https://testautomationpractice.blogspot.com/p/playwrightpractice.html
    - generic [ref=e48]:
      - generic:
        - generic [ref=e58]:
          - generic [ref=e59]:
            - generic [ref=e64]:
              - heading [level=3] [ref=e65]:
                - link "Data Entry Form" [ref=e66] [cursor=pointer]:
                  - /url: https://testautomationpractice.blogspot.com/2018/09/automation-form.html
              - generic [ref=e67]:
                - generic [ref=e68]:
                  - generic [ref=e69]: "Name:"
                  - textbox "Enter Name" [ref=e70]: Theron Bechtela
                  - generic [ref=e71]: "Email:"
                  - textbox "Enter EMail" [ref=e72]: Itzel_Borer19@yahoo.com
                  - generic [ref=e73]: "Phone:"
                  - textbox "Enter Phone" [ref=e74]: "9650484268"
                - generic [ref=e75]:
                  - generic [ref=e76]: "Address:"
                  - textbox "Address:" [ref=e77]: 154 Poplar Close
                - generic [ref=e78]:
                  - generic [ref=e79]: "Gender:"
                  - generic [ref=e80]:
                    - radio "Male" [checked] [ref=e81]
                    - generic [ref=e82]: Male
                  - generic [ref=e83]:
                    - radio "Female" [ref=e84]
                    - generic [ref=e85]: Female
                - generic [ref=e86]:
                  - generic [ref=e87]: "Days:"
                  - generic [ref=e88]:
                    - checkbox "Sunday" [ref=e89]
                    - generic [ref=e90]: Sunday
                  - generic [ref=e91]:
                    - checkbox "Monday" [checked] [ref=e92]
                    - generic [ref=e93]: Monday
                  - generic [ref=e94]:
                    - checkbox "Tuesday" [checked] [ref=e95]
                    - generic [ref=e96]: Tuesday
                  - generic [ref=e97]:
                    - checkbox "Wednesday" [ref=e98]
                    - generic [ref=e99]: Wednesday
                  - generic [ref=e100]:
                    - checkbox "Thursday" [ref=e101]
                    - generic [ref=e102]: Thursday
                  - generic [ref=e103]:
                    - checkbox "Friday" [ref=e104]
                    - generic [ref=e105]: Friday
                  - generic [ref=e106]:
                    - checkbox "Saturday" [ref=e107]
                    - generic [ref=e108]: Saturday
                - generic [ref=e109]:
                  - generic [ref=e110]: "Country:"
                  - combobox "Country:" [ref=e111]:
                    - option "United States"
                    - option "Canada"
                    - option "United Kingdom"
                    - option "Germany"
                    - option "France"
                    - option "Australia"
                    - option "Japan"
                    - option "China"
                    - option "Brazil"
                    - option "India" [selected]
                - generic [ref=e112]:
                  - generic [ref=e113]: "Colors:"
                  - listbox "Colors:" [ref=e114]:
                    - option "Red" [ref=e115]
                    - option "Blue" [ref=e116]
                    - option "Green" [ref=e117]
                    - option "Yellow" [selected] [ref=e118]
                    - option "Red" [ref=e119]
                    - option "White" [ref=e120]
                    - option "Green" [ref=e121]
                - generic [ref=e122]:
                  - generic [ref=e123]: "Sorted List:"
                  - listbox "Sorted List:" [ref=e124]:
                    - option "Cat" [ref=e125]
                    - option "Cheetah" [ref=e126]
                    - option "Deer" [ref=e127]
                    - option "Dog" [ref=e128]
                    - option "Elephant" [ref=e129]
                    - option "Fox" [ref=e130]
                    - option "Giraffe" [selected] [ref=e131]
                    - option "Lion" [ref=e132]
                    - option "Rabbit" [ref=e133]
                    - option "Zebra" [ref=e134]
                - paragraph [ref=e135]:
                  - text: "Date Picker 1 (mm/dd/yyyy):"
                  - textbox [ref=e136]: 01/01/2026
                - paragraph [ref=e137]:
                  - text: "Date Picker 2 (dd/mm/yyyy) :"
                  - textbox [ref=e138]
                - generic [ref=e139]: "Date Picker 3: (Select a Date Range)"
                - generic [ref=e140]:
                  - textbox [active] [ref=e141]:
                    - /placeholder: Start Date
                  - generic [ref=e142]: to
                  - textbox [ref=e143]:
                    - /placeholder: End Date
                  - button "Submit" [ref=e144] [cursor=pointer]
            - link "Home" [ref=e148] [cursor=pointer]:
              - /url: https://testautomationpractice.blogspot.com/
            - generic [ref=e150]:
              - text: "Subscribe to:"
              - link "Posts (Atom)" [ref=e151] [cursor=pointer]:
                - /url: https://testautomationpractice.blogspot.com/feeds/posts/default
          - generic [ref=e152]:
            - heading "Upload Files" [level=2] [ref=e153]
            - generic [ref=e154]:
              - generic [ref=e155]:
                - button "Choose File" [ref=e156]
                - button "Upload Single File" [ref=e157] [cursor=pointer]
              - paragraph
              - generic [ref=e158]:
                - button "Choose File" [ref=e159]
                - button "Upload Multiple Files" [ref=e160] [cursor=pointer]
              - paragraph
          - generic [ref=e161]:
            - heading "Static Web Table" [level=2] [ref=e162]
            - table [ref=e164]:
              - rowgroup [ref=e165]:
                - row [ref=e166]:
                  - columnheader "BookName" [ref=e167]
                  - columnheader "Author" [ref=e168]
                  - columnheader "Subject" [ref=e169]
                  - columnheader "Price" [ref=e170]
                - row [ref=e171]:
                  - cell "Learn Selenium" [ref=e172]
                  - cell "Amit" [ref=e173]
                  - cell "Selenium" [ref=e174]
                  - cell "300" [ref=e175]
                - row [ref=e176]:
                  - cell "Learn Java" [ref=e177]
                  - cell "Mukesh" [ref=e178]
                  - cell "Java" [ref=e179]
                  - cell "500" [ref=e180]
                - row [ref=e181]:
                  - cell "Learn JS" [ref=e182]
                  - cell "Animesh" [ref=e183]
                  - cell "Javascript" [ref=e184]
                  - cell "300" [ref=e185]
                - row [ref=e186]:
                  - cell "Master In Selenium" [ref=e187]
                  - cell "Mukesh" [ref=e188]
                  - cell "Selenium" [ref=e189]
                  - cell "3000" [ref=e190]
                - row [ref=e191]:
                  - cell "Master In Java" [ref=e192]
                  - cell "Amod" [ref=e193]
                  - cell "JAVA" [ref=e194]
                  - cell "2000" [ref=e195]
                - row [ref=e196]:
                  - cell "Master In JS" [ref=e197]
                  - cell "Amit" [ref=e198]
                  - cell "Javascript" [ref=e199]
                  - cell "1000" [ref=e200]
          - generic [ref=e201]:
            - heading "Dynamic Web Table" [level=2] [ref=e202]
            - generic [ref=e203]:
              - table [ref=e204]:
                - rowgroup [ref=e205]:
                  - row [ref=e206]:
                    - columnheader "Name" [ref=e207]
                    - columnheader "Memory (MB)" [ref=e208]
                    - columnheader "Disk (MB/s)" [ref=e209]
                    - columnheader "Network (Mbps)" [ref=e210]
                    - columnheader "CPU (%)" [ref=e211]
                - rowgroup [ref=e212]:
                  - row [ref=e213]:
                    - cell "Chrome" [ref=e214]
                    - cell "46.3 MB" [ref=e215]
                    - cell "0.41 MB/s" [ref=e216]
                    - cell "9.0 Mbps" [ref=e217]
                    - cell "1.8%" [ref=e218]
                  - row [ref=e219]:
                    - cell "System" [ref=e220]
                    - cell "75.7 MB" [ref=e221]
                    - cell "1.00 MB/s" [ref=e222]
                    - cell "3.8 Mbps" [ref=e223]
                    - cell "3.9%" [ref=e224]
                  - row [ref=e225]:
                    - cell "Firefox" [ref=e226]
                    - cell "65.4 MB" [ref=e227]
                    - cell "0.31 MB/s" [ref=e228]
                    - cell "7.3 Mbps" [ref=e229]
                    - cell "4.3%" [ref=e230]
                  - row [ref=e231]:
                    - cell "Internet Explorer" [ref=e232]
                    - cell "92.8 MB" [ref=e233]
                    - cell "0.95 MB/s" [ref=e234]
                    - cell "7.8 Mbps" [ref=e235]
                    - cell "2.8%" [ref=e236]
              - generic [ref=e237]:
                - paragraph [ref=e238]:
                  - text: "CPU load of Chrome process:"
                  - strong [ref=e239]: 1.8%
                - paragraph [ref=e240]:
                  - text: "Memory Size of Firefox process:"
                  - strong [ref=e241]: 65.4 MB
                - paragraph [ref=e242]:
                  - text: "Network speed of Chrome process:"
                  - strong [ref=e243]: 9.0 Mbps
                - paragraph [ref=e244]:
                  - text: "Disk space of Firefox process:"
                  - strong [ref=e245]: 0.31 MB/s
          - generic [ref=e246]:
            - heading "Pagination Web Table" [level=2] [ref=e247]
            - generic [ref=e249]:
              - table [ref=e250]:
                - rowgroup [ref=e251]:
                  - row [ref=e252]:
                    - columnheader "ID" [ref=e253]
                    - columnheader "Name" [ref=e254]
                    - columnheader "Price" [ref=e255]
                    - columnheader "Select" [ref=e256]
                - rowgroup [ref=e257]:
                  - row [ref=e258]:
                    - cell "1" [ref=e259]
                    - cell "Smartphone" [ref=e260]
                    - cell "$10.99" [ref=e261]
                    - cell [ref=e262]:
                      - checkbox [ref=e263]
                  - row [ref=e264]:
                    - cell "2" [ref=e265]
                    - cell "Laptop" [ref=e266]
                    - cell "$19.99" [ref=e267]
                    - cell [ref=e268]:
                      - checkbox [ref=e269]
                  - row [ref=e270]:
                    - cell "3" [ref=e271]
                    - cell "Tablet" [ref=e272]
                    - cell "$5.99" [ref=e273]
                    - cell [ref=e274]:
                      - checkbox [ref=e275]
                  - row [ref=e276]:
                    - cell "4" [ref=e277]
                    - cell "Smartwatch" [ref=e278]
                    - cell "$7.99" [ref=e279]
                    - cell [ref=e280]:
                      - checkbox [ref=e281]
                  - row [ref=e282]:
                    - cell "5" [ref=e283]
                    - cell "Wireless Earbuds" [ref=e284]
                    - cell "$8.99" [ref=e285]
                    - cell [ref=e286]:
                      - checkbox [ref=e287]
              - list [ref=e288]:
                - listitem [ref=e289]:
                  - link "1" [ref=e290] [cursor=pointer]:
                    - /url: "#"
                - listitem [ref=e291]:
                  - link "2" [ref=e292] [cursor=pointer]:
                    - /url: "#"
                - listitem [ref=e293]:
                  - link "3" [ref=e294] [cursor=pointer]:
                    - /url: "#"
                - listitem [ref=e295]:
                  - link "4" [ref=e296] [cursor=pointer]:
                    - /url: "#"
        - generic:
          - generic:
            - complementary
        - complementary [ref=e299]:
          - generic [ref=e300]:
            - generic [ref=e301]:
              - heading "Tabs" [level=2] [ref=e302]
              - generic [ref=e305]:
                - link [ref=e307] [cursor=pointer]:
                  - /url: https://wikipedia.org/wiki/
                - generic [ref=e309]:
                  - textbox [ref=e311]
                  - button "Submit" [ref=e313] [cursor=pointer]
            - generic [ref=e315]:
              - heading "Dynamic Button" [level=2] [ref=e316]
              - button "START" [ref=e318] [cursor=pointer]
            - generic [ref=e319]:
              - heading "Alerts & Popups" [level=2] [ref=e320]
              - generic [ref=e321]:
                - button "Simple Alert" [ref=e322] [cursor=pointer]
                - button "Confirmation Alert" [ref=e323] [cursor=pointer]
                - button "Prompt Alert" [ref=e324] [cursor=pointer]
                - paragraph
            - button "New Tab" [ref=e327] [cursor=pointer]
            - button "Popup Windows" [ref=e332] [cursor=pointer]
            - generic [ref=e333]:
              - heading "Mouse Hover" [level=2] [ref=e334]
              - generic [ref=e335]:
                - paragraph [ref=e336]: Move the mouse over the button to open the dropdown menu.
                - button "Point Me" [ref=e338] [cursor=pointer]
            - generic [ref=e339]:
              - heading "Double Click" [level=2] [ref=e340]
              - generic [ref=e341]:
                - text: "Field1:"
                - textbox [ref=e342]: Hello World!
                - text: "Field2:"
                - textbox [ref=e343]
                - button "Copy Text" [ref=e344] [cursor=pointer]
                - paragraph [ref=e345]: Double click on button, the text from Field1 will be copied into Field2.
            - generic [ref=e346]:
              - heading "Drag and Drop" [level=2] [ref=e347]
              - generic:
                - paragraph [ref=e349]: Drag me to my target
                - paragraph [ref=e351]: Drop here
            - generic [ref=e352]:
              - heading "Slider" [level=2] [ref=e353]
              - generic [ref=e354]:
                - paragraph [ref=e355]:
                  - generic [ref=e356]: "Price range:"
                  - textbox "Price range:" [ref=e357]: $75 - $300
                - generic [ref=e358]:
                  - generic [ref=e360] [cursor=pointer]
                  - generic [ref=e361] [cursor=pointer]
            - heading "SVG Elements" [level=2] [ref=e363]
            - generic [ref=e372]:
              - heading "Scrolling DropDown" [level=2] [ref=e373]
              - textbox "Select an item" [ref=e375]
            - generic [ref=e376]:
              - heading "Labels And Links" [level=2] [ref=e377]
              - generic [ref=e379]:
                - generic [ref=e380]:
                  - heading "Mobile Labels" [level=4] [ref=e381]
                  - generic [ref=e382]: Samsung
                  - generic [ref=e383]: Real Me
                  - generic [ref=e384]: Moto
                - generic [ref=e385]:
                  - heading "Laptop Links" [level=4] [ref=e386]
                  - link "Apple" [ref=e387] [cursor=pointer]:
                    - /url: https://www.apple.com/
                  - link "Lenovo" [ref=e388] [cursor=pointer]:
                    - /url: https://www.lenovo.com/
                  - link "Dell" [ref=e389] [cursor=pointer]:
                    - /url: https://www.dell.com/
                - generic [ref=e390]:
                  - heading "Broken Links" [level=4] [ref=e391]
                  - link "Errorcode 400" [ref=e392] [cursor=pointer]:
                    - /url: http://www.deadlinkcity.com/error-page.asp?e=400
                  - link "Errorcode 401" [ref=e393] [cursor=pointer]:
                    - /url: http://www.deadlinkcity.com/error-page.asp?e=401
                  - link "Errorcode 403" [ref=e394] [cursor=pointer]:
                    - /url: http://www.deadlinkcity.com/error-page.asp?e=403
                  - link "Errorcode 404" [ref=e395] [cursor=pointer]:
                    - /url: http://www.deadlinkcity.com/error-page.asp?e=404
                  - link "Errorcode 408" [ref=e396] [cursor=pointer]:
                    - /url: http://www.deadlinkcity.com/error-page.asp?e=408
                  - link "Errorcode 500" [ref=e397] [cursor=pointer]:
                    - /url: http://www.deadlinkcity.com/error-page.asp?e=500
                  - link "Errorcode 502" [ref=e398] [cursor=pointer]:
                    - /url: http://www.deadlinkcity.com/error-page.asp?e=502
                  - link "Errorcode 503" [ref=e399] [cursor=pointer]:
                    - /url: http://www.deadlinkcity.com/error-page.asp?e=503
            - generic [ref=e400]:
              - heading "Visitors" [level=2] [ref=e401]
              - generic [ref=e403]:
                - generic "A chart." [ref=e407]:
                  - img "A chart." [ref=e408]
                  - generic "A tabular representation of the data in the chart." [ref=e420]:
                    - table [ref=e421]:
                      - rowgroup [ref=e422]:
                        - row [ref=e423]:
                          - columnheader [ref=e424]
                          - columnheader [ref=e425]
                      - rowgroup [ref=e426]:
                        - row [ref=e427]:
                          - cell "0" [ref=e428]
                          - cell "94" [ref=e429]
                        - row [ref=e430]:
                          - cell "1" [ref=e431]
                          - cell "83" [ref=e432]
                        - row [ref=e433]:
                          - cell "2" [ref=e434]
                          - cell "100" [ref=e435]
                        - row [ref=e436]:
                          - cell "3" [ref=e437]
                          - cell "78" [ref=e438]
                        - row [ref=e439]:
                          - cell "4" [ref=e440]
                          - cell "58" [ref=e441]
                        - row [ref=e442]:
                          - cell "5" [ref=e443]
                          - cell "62" [ref=e444]
                        - row [ref=e445]:
                          - cell "6" [ref=e446]
                          - cell "83" [ref=e447]
                        - row [ref=e448]:
                          - cell "7" [ref=e449]
                          - cell "94" [ref=e450]
                        - row [ref=e451]:
                          - cell "8" [ref=e452]
                          - cell "79" [ref=e453]
                        - row [ref=e454]:
                          - cell "9" [ref=e455]
                          - cell "92" [ref=e456]
                        - row [ref=e457]:
                          - cell "10" [ref=e458]
                          - cell "72" [ref=e459]
                        - row [ref=e460]:
                          - cell "11" [ref=e461]
                          - cell "50" [ref=e462]
                        - row [ref=e463]:
                          - cell "12" [ref=e464]
                          - cell "56" [ref=e465]
                        - row [ref=e466]:
                          - cell "13" [ref=e467]
                          - cell "89" [ref=e468]
                        - row [ref=e469]:
                          - cell "14" [ref=e470]
                          - cell "91" [ref=e471]
                        - row [ref=e472]:
                          - cell "15" [ref=e473]
                          - cell "86" [ref=e474]
                        - row [ref=e475]:
                          - cell "16" [ref=e476]
                          - cell "85" [ref=e477]
                        - row [ref=e478]:
                          - cell "17" [ref=e479]
                          - cell "75" [ref=e480]
                        - row [ref=e481]:
                          - cell "18" [ref=e482]
                          - cell "61" [ref=e483]
                        - row [ref=e484]:
                          - cell "19" [ref=e485]
                          - cell "59" [ref=e486]
                        - row [ref=e487]:
                          - cell "20" [ref=e488]
                          - cell "82" [ref=e489]
                        - row [ref=e490]:
                          - cell "21" [ref=e491]
                          - cell "82" [ref=e492]
                        - row [ref=e493]:
                          - cell "22" [ref=e494]
                          - cell "76" [ref=e495]
                        - row [ref=e496]:
                          - cell "23" [ref=e497]
                          - cell "75" [ref=e498]
                        - row [ref=e499]:
                          - cell "24" [ref=e500]
                          - cell "78" [ref=e501]
                        - row [ref=e502]:
                          - cell "25" [ref=e503]
                          - cell "54" [ref=e504]
                        - row [ref=e505]:
                          - cell "26" [ref=e506]
                          - cell "52" [ref=e507]
                        - row [ref=e508]:
                          - cell "27" [ref=e509]
                          - cell "89" [ref=e510]
                        - row [ref=e511]:
                          - cell "28" [ref=e512]
                          - cell "100" [ref=e513]
                        - row [ref=e514]:
                          - cell "29" [ref=e515]
                          - cell "53" [ref=e516]
                - generic [ref=e517]: 8,792,761
    - contentinfo [ref=e518]:
      - generic [ref=e521]:
        - table [ref=e522]:
          - rowgroup [ref=e523]:
            - row [ref=e524]:
              - cell [ref=e525]:
                - generic [ref=e526]:
                  - generic [ref=e527]:
                    - heading "Form" [level=2] [ref=e528]
                    - generic [ref=e530]:
                      - generic [ref=e531]:
                        - heading "Section 1" [level=4] [ref=e532]
                        - paragraph [ref=e533]: This is a paragraph in Section 1.
                        - textbox [ref=e534]
                        - button "Submit" [ref=e535] [cursor=pointer]
                      - generic [ref=e536]:
                        - heading "Section 2" [level=4] [ref=e537]
                        - paragraph [ref=e538]: This is a paragraph in Section 2.
                        - textbox [ref=e539]
                        - button "Submit" [ref=e540] [cursor=pointer]
                      - generic [ref=e541]:
                        - heading "Section 3" [level=4] [ref=e542]
                        - paragraph [ref=e543]: This is a paragraph in Section 3.
                        - textbox [ref=e544]
                        - button "Submit" [ref=e545] [cursor=pointer]
                  - generic [ref=e546]:
                    - heading "Footer Links" [level=2] [ref=e547]
                    - list [ref=e549]:
                      - listitem [ref=e550]:
                        - link "Home" [ref=e551] [cursor=pointer]:
                          - /url: http://testautomationpractice.blogspot.com/
                      - listitem [ref=e552]:
                        - link "Hidden Elements & AJAX" [ref=e553] [cursor=pointer]:
                          - /url: https://testautomationpractice.blogspot.com/p/gui-elements-ajax-hidden.html
                      - listitem [ref=e554]:
                        - link "Download Files" [ref=e555] [cursor=pointer]:
                          - /url: https://testautomationpractice.blogspot.com/p/download-files_25.html
              - cell "ShadowDOM Mobiles Laptops Blog Choose File Youtube" [ref=e556]:
                - generic [ref=e558]:
                  - heading "ShadowDOM" [level=2] [ref=e559]
                  - generic [ref=e560]:
                    - generic [ref=e561]:
                      - generic [ref=e562]: Mobiles
                      - generic [ref=e563]: Laptops
                      - link "Blog" [ref=e566] [cursor=pointer]:
                        - /url: https://www.pavantestingtools.com/
                      - textbox [ref=e567]
                      - checkbox [ref=e568]
                      - button "Choose File" [ref=e569]
                    - link "Youtube" [ref=e570] [cursor=pointer]:
                      - /url: https://www.youtube.com/@sdetpavan/videos
        - generic [ref=e573]:
          - text: Theme images by
          - link "merrymoonmary" [ref=e574] [cursor=pointer]:
            - /url: http://www.istockphoto.com/portfolio/merrymoonmary?platform=blogger
          - text: . Powered by
          - link "Blogger" [ref=e575] [cursor=pointer]:
            - /url: https://draft.blogger.com
          - text: .
  - generic [ref=e576]:
    - generic [ref=e577]:
      - generic "Prev" [ref=e578]
      - generic "Next" [ref=e580]
      - generic [ref=e582]: September 2026
    - table [ref=e583]:
      - rowgroup [ref=e584]:
        - row [ref=e585]:
          - columnheader "Su" [ref=e586]
          - columnheader "Mo" [ref=e587]
          - columnheader "Tu" [ref=e588]
          - columnheader "We" [ref=e589]
          - columnheader "Th" [ref=e590]
          - columnheader "Fr" [ref=e591]
          - columnheader "Sa" [ref=e592]
      - rowgroup [ref=e593]:
        - row [ref=e594]:
          - cell
          - cell
          - cell [ref=e595]:
            - link "1" [ref=e596] [cursor=pointer]:
              - /url: "#"
          - cell [ref=e597]:
            - link "2" [ref=e598] [cursor=pointer]:
              - /url: "#"
          - cell [ref=e599]:
            - link "3" [ref=e600] [cursor=pointer]:
              - /url: "#"
          - cell [ref=e601]:
            - link "4" [ref=e602] [cursor=pointer]:
              - /url: "#"
          - cell [ref=e603]:
            - link "5" [ref=e604] [cursor=pointer]:
              - /url: "#"
        - row [ref=e605]:
          - cell [ref=e606]:
            - link "6" [ref=e607] [cursor=pointer]:
              - /url: "#"
          - cell [ref=e608]:
            - link "7" [ref=e609] [cursor=pointer]:
              - /url: "#"
          - cell [ref=e610]:
            - link "8" [ref=e611] [cursor=pointer]:
              - /url: "#"
          - cell [ref=e612]:
            - link "9" [ref=e613] [cursor=pointer]:
              - /url: "#"
          - cell [ref=e614]:
            - link "10" [ref=e615] [cursor=pointer]:
              - /url: "#"
          - cell [ref=e616]:
            - link "11" [ref=e617] [cursor=pointer]:
              - /url: "#"
          - cell [ref=e618]:
            - link "12" [ref=e619] [cursor=pointer]:
              - /url: "#"
        - row [ref=e620]:
          - cell [ref=e621]:
            - link "13" [ref=e622] [cursor=pointer]:
              - /url: "#"
          - cell [ref=e623]:
            - link "14" [ref=e624] [cursor=pointer]:
              - /url: "#"
          - cell [ref=e625]:
            - link "15" [ref=e626] [cursor=pointer]:
              - /url: "#"
          - cell [ref=e627]:
            - link "16" [ref=e628] [cursor=pointer]:
              - /url: "#"
          - cell [ref=e629]:
            - link "17" [ref=e630] [cursor=pointer]:
              - /url: "#"
          - cell [ref=e631]:
            - link "18" [ref=e632] [cursor=pointer]:
              - /url: "#"
          - cell [ref=e633]:
            - link "19" [ref=e634] [cursor=pointer]:
              - /url: "#"
        - row [ref=e635]:
          - cell [ref=e636]:
            - link "20" [ref=e637] [cursor=pointer]:
              - /url: "#"
          - cell [ref=e638]:
            - link "21" [ref=e639] [cursor=pointer]:
              - /url: "#"
          - cell [ref=e640]:
            - link "22" [ref=e641] [cursor=pointer]:
              - /url: "#"
          - cell [ref=e642]:
            - link "23" [ref=e643] [cursor=pointer]:
              - /url: "#"
          - cell [ref=e644]:
            - link "24" [ref=e645] [cursor=pointer]:
              - /url: "#"
          - cell [ref=e646]:
            - link "25" [ref=e647] [cursor=pointer]:
              - /url: "#"
          - cell [ref=e648]:
            - link "26" [ref=e649] [cursor=pointer]:
              - /url: "#"
        - row [ref=e650]:
          - cell [ref=e651]:
            - link "27" [ref=e652] [cursor=pointer]:
              - /url: "#"
          - cell [ref=e653]:
            - link "28" [ref=e654] [cursor=pointer]:
              - /url: "#"
          - cell [ref=e655]:
            - link "29" [ref=e656] [cursor=pointer]:
              - /url: "#"
          - cell [ref=e657]:
            - link "30" [ref=e658] [cursor=pointer]:
              - /url: "#"
          - cell
          - cell
          - cell
```

# Test source

```ts
  1   |  class DataEntry{
  2   | 
  3   | 
  4   |     constructor (page)
  5   |     {
  6   |         this.page=page;
  7   |         this.name=page.locator('#name');
  8   |         this.email=page.getByRole('textbox', { name: 'Enter EMail' });
  9   |         this.phone=page.getByRole('textbox', { name: 'Enter Phone' });
  10  |         this.address=page.getByRole('textbox', { name: 'Address:' });
  11  |         this.submit=page.getByRole('button',{name:'Submit'});
  12  |         this.datepicker1=page.locator('#datepicker');
  13  |     
  14  | 
  15  |     }
  16  | 
  17  | 
  18  | 
  19  |         async fillContactForm({ name, email, phone,address }) {
  20  |     await this.name.fill(name);
  21  |     await this.email.fill(email);
  22  |     await this.phone.fill(phone);
  23  |       await this.address.fill(address);
  24  | }
  25  | 
  26  |     async checkGender(value)
  27  |     {
  28  |        await this.page.getByRole('radio', { name: value, exact: true }).check();
  29  | 
  30  |     }
  31  | 
  32  |     async getDayCheckbox(noOfDays,days)
  33  |     {
  34  |        
  35  |        await page.getByRole('checkbox', { name: days }).check();
  36  |     }
  37  | 
  38  |     async selectDays(arrayDays)
  39  |     {
  40  |         for(const day of arrayDays)
  41  |         {
  42  |            const checkbox= await this.page.getByRole('checkbox', { name: day });
  43  |            await checkbox.check();
  44  |         }
  45  |     }
  46  | 
  47  |     async selectCountry(country)
  48  |     {
  49  |          await this.page.getByLabel('Country:').selectOption(country);
  50  |     }
  51  | 
  52  |     async singlecolour(color)
  53  |     {
  54  |       await this.page.getByLabel('Colors:').selectOption(color);
  55  |     }
  56  | 
  57  |     async mutipleColours(colourarray)
  58  |     {
  59  |         for(const colour of colourarray)
  60  |         {
  61  |            await this.page.getByLabel('Colors:').selectOption(colour);
  62  |     }
  63  | 
  64  |     }
  65  | 
  66  |     async singlelist(value)
  67  |     {
  68  |         this.page.getByLabel('Sorted List:').selectOption(value);
  69  |     }
  70  | 
  71  | 
  72  |     async multiplelist(arraylist)
  73  |     {
  74  |         for(const list of arraylist )
  75  |         {
  76  |               this.page.getByLabel('Sorted List:').selectOption(list);
  77  |         }
  78  |     }
  79  | 
  80  |     async startDate(date)
  81  |     {
> 82  |          await this.page.locator('#start-date').fill(date);
      |                                                 ^ Error: locator.fill: Error: Malformed value
  83  | 
  84  |     }
  85  | 
  86  |      async endDate(date)
  87  |     {
  88  |          await this.page.locator('#end-date').fill(date);
  89  | 
  90  |     }
  91  | 
  92  |     async datepicker(day,month,year)
  93  |     {
  94  |          await this.page.getByRole('textbox', { name: 'SelectedDate' }).click();
  95  |          // Month/Year are native <select> dropdowns
  96  |       await this.page.locator('.ui-datepicker-month').selectOption({ label: month });
  97  |           await this.page.locator('.ui-datepicker-year').selectOption({ label: year });
  98  | 
  99  |   // Day link — matched by its data-date attribute (stable, unambiguous)
  100 |   await this.page.locator(`a[data-date="${day}"]`).click();
  101 |     }
  102 | 
  103 |     async fillDatepicker(date) {
  104 |   await this.datepicker1.fill(date); // e.g. '09/15/2026'
  105 | }
  106 | 
  107 | 
  108 | async submit()
  109 | {
  110 |     await this.submit.click();
  111 | }
  112 | }
  113 | 
  114 | 
  115 | module.exports = { DataEntry };
```